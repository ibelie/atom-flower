"use 6to5";

const {CompositeDisposable} = require('atom');
const Flower = require('./flower/flower');
const FlowerTree = require('./flower/flower-tree');
const FlowerGantt = require('./flower/flower-gantt');
const BottomPanel = require('./panel/panel-bottom');

/**
 * The composite disposable that stores the package's subscriptions.
 */
var subscriptions = null;

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
		BottomPanel.attach();
		if (!subscriptions) {
			subscriptions = new CompositeDisposable();
			subscriptions.add(atom.workspace.observeTextEditors((editor) => {
				var path = editor.getPath();
				if (path && path.endsWith('.flw')) {
					var flower = Flower.forEditor(editor);
					atom.views.getView(new FlowerGantt.Model(flower)).attach(BottomPanel);
					atom.views.getView(new FlowerTree.Model(flower)).attach(BottomPanel);
				}
			}));
			subscriptions.add(atom.workspace.observeActiveTextEditor((editor) => {
				var path = editor && editor.getPath();
				if (path && path.endsWith('.flw')) {
					BottomPanel.panel.show();
				} else {
					BottomPanel.panel.hide();
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
		Flower.destroyAll();
	}
};
