"use 6to5";

const {CompositeDisposable} = require('atom');
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
 * Returns the `Flower` objects associated to the passed-in `TextEditor`.
 */
function flowersForEditor(editor) {
	if (!editor || !editorsFlowers) {
		return;
	}

	var flowers = editorsFlowers.get(editor);

	if (!flowers) {
		flowers = {};
		editorsFlowers.set(editor, flowers);

		var editorSubscription = editor.onDidDestroy(() => {
			var flowers = editorsFlowers;
			if (flowers) {
				flowers.delete(editor);
			}
			editorSubscription.dispose();
		});
	}

	return flowers;
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
		if (!subscriptions) {
			subscriptions = new CompositeDisposable();
			subscriptions.add(atom.workspace.observeTextEditors((editor) => {
				var path = editor.getPath();
				if (path && path.endsWith('.flw')) {
					var flowers = flowersForEditor(editor);
					flowers && flowers.forEach((value, _) => value.attach());
				}
			}));
		}
		if (!editorsFlowers) {
			editorsFlowers = new Map();
		}
		atom.config.observe('atom-flower', (cfg) => {
			console.info(cfg);
		});
		console.info(atom.config.get('atom-flower'));
	},

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
