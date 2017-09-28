"use 6to5";

const {CompositeDisposable} = require('atom');
const Flower = require('./flower');
const FlowerTree = require('./flower-tree');
const FlowerGantt = require('./flower-gantt');

/**
 * The `Map` where Flowers instances are stored with the text editor they target as key.
 */
var editorsFlowers = null;

/**
 * The composite disposable that stores the package's subscriptions.
 */
var subscriptions = null;

/**
 * Returns the `Flower` object associated to the passed-in `TextEditor`.
 */
function flowersForEditor(editor) {
	if (!editor || !editorsFlowers) {
		return;
	}

	var flower = editorsFlowers.get(editor);

	if (!flower) {
		flower = new Flower(editor);
		editorsFlowers.set(editor, flower);

		var editorSubscription = editor.onDidDestroy(() => {
			var flowers = editorsFlowers;
			if (flowers) {
				flowers.delete(editor);
			}
			editorSubscription.dispose();
		});
	}

	return flower;
}

module.exports = {
	// Configuration
	config: {
		FlowerDefinationPath: {
			type: 'string',
			'default': ''
		}
	},

	/**
	 * Activates the flower package.
	 */
	activate: (state) => {
		if (!editorsFlowers) {
			editorsFlowers = new Map();
		}
		if (!subscriptions) {
			subscriptions = new CompositeDisposable();
			subscriptions.add(atom.workspace.observeTextEditors((editor) => {
				var path = editor.getPath();
				if (path && path.endsWith('.flw')) {
					var flower = flowersForEditor(editor);
					atom.views.getView(new FlowerGantt.Model(flower)).attach();
					atom.views.getView(new FlowerTree.Model(flower)).attach();
				}
			}));
		}
		atom.config.observe('atom-flower', (cfg) => console.info(cfg));
		console.info(atom.config.get('atom-flower'));
	},

	flowerGanttProvider: FlowerTree.viewProvider,
	flowerTreeProvider: FlowerGantt.viewProvider,

	/**
	 * Deactivates the flower package.
	 */
	deactivate: () => {
		if (subscriptions) {
			subscriptions.dispose();
			subscriptions = null;
		}
		if (editorsFlowers) {
			editorsFlowers.forEach((value, key) => {
				value.destroy()
				editorsFlowers.delete(key)
			})
		}
	}
};
