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

/*
<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1762"><path d="M23.881 62.017h289.82v167.793h-289.82v-167.793zM283.194 519.627h289.82v167.793h-289.82v-167.793zM283.194 115.402h137.283v45.761h-137.283v-45.761zM367.089 145.909h45.761v160.164h-45.761v-160.164zM367.089 428.107h45.761v160.164h-45.761v-160.164zM573.015 618.775h137.283v45.761h-137.283v-45.761zM664.537 649.283h45.761v129.658h-45.761v-129.658zM939.107 313.699v91.524h-594.898v-91.524h594.898M1000.119 252.685h-716.929v213.553h716.929v-213.553zM939.107 817.074v83.893h-305.074v-83.893h305.074M1000.119 756.060h-427.107v205.926h427.107v-205.926z" p-id="1763"/></svg>

 */

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
		var bottomPanel = new BottomPanel();
		bottomPanel.attach();
		if (!subscriptions) {
			subscriptions = new CompositeDisposable();
			subscriptions.add(atom.workspace.observeActiveTextEditor((editor) => {
				var path = editor && editor.getPath();
				if (path && path.endsWith('.flw')) {
					var flower = Flower.forEditor(editor);
					flower.getView(FlowerGantt).attach(bottomPanel);
					flower.getView(FlowerTree).attach(bottomPanel);
					bottomPanel.panel.show();
				} else {
					bottomPanel.panel.hide();
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
