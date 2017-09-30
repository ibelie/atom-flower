"use 6to5";

const {CompositeDisposable} = require('atom');
const Flower = require('./flower/flower');
const FlowerTree = require('./flower/flower-tree');
const FlowerGantt = require('./flower/flower-gantt');
const BottomPanel = require('./panel/panel-bottom');
const LeftPanel = require('./panel/panel-left');

/**
 * The composite disposable that stores the package's subscriptions.
 */
var subscriptions = null;

/*
<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M23.881 62.017h289.82v167.793h-289.82v-167.793zM283.194 519.627h289.82v167.793h-289.82v-167.793zM283.194 115.402h137.283v45.761h-137.283v-45.761zM367.089 145.909h45.761v160.164h-45.761v-160.164zM367.089 428.107h45.761v160.164h-45.761v-160.164zM573.015 618.775h137.283v45.761h-137.283v-45.761zM664.537 649.283h45.761v129.658h-45.761v-129.658zM939.107 313.699v91.524h-594.898v-91.524h594.898M1000.119 252.685h-716.929v213.553h716.929v-213.553zM939.107 817.074v83.893h-305.074v-83.893h305.074M1000.119 756.060h-427.107v205.926h427.107v-205.926z"/></svg>

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
		var leftPanel = new LeftPanel();
		leftPanel.attach();

		var gantt = bottomPanel.addTabPanel(`
			<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M23.881 62.017h289.82v167.793h-289.82v-167.793zM283.194 519.627h289.82v167.793h-289.82v-167.793zM283.194 115.402h137.283v45.761h-137.283v-45.761zM367.089 145.909h45.761v160.164h-45.761v-160.164zM367.089 428.107h45.761v160.164h-45.761v-160.164zM573.015 618.775h137.283v45.761h-137.283v-45.761zM664.537 649.283h45.761v129.658h-45.761v-129.658zM939.107 313.699v91.524h-594.898v-91.524h594.898M1000.119 252.685h-716.929v213.553h716.929v-213.553zM939.107 817.074v83.893h-305.074v-83.893h305.074M1000.119 756.060h-427.107v205.926h427.107v-205.926z"/></svg>
			`, 'Gantt');
		var tree = bottomPanel.addTabPanel(`
			<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M23.881 62.017h289.82v167.793h-289.82v-167.793zM283.194 519.627h289.82v167.793h-289.82v-167.793zM283.194 115.402h137.283v45.761h-137.283v-45.761zM367.089 145.909h45.761v160.164h-45.761v-160.164zM367.089 428.107h45.761v160.164h-45.761v-160.164zM573.015 618.775h137.283v45.761h-137.283v-45.761zM664.537 649.283h45.761v129.658h-45.761v-129.658zM939.107 313.699v91.524h-594.898v-91.524h594.898M1000.119 252.685h-716.929v213.553h716.929v-213.553zM939.107 817.074v83.893h-305.074v-83.893h305.074M1000.119 756.060h-427.107v205.926h427.107v-205.926z"/></svg>
			`, 'Tree');
		var debug = bottomPanel.addTabPanel(`
			<svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z"></path></svg>
			`, 'Debug');

		if (!subscriptions) {
			subscriptions = new CompositeDisposable();
			subscriptions.add(atom.workspace.observeActiveTextEditor((editor) => {
				var path = editor && editor.getPath();
				if (path && path.endsWith('.flw')) {
					var flower = Flower.forEditor(editor);
					flower.getView(FlowerGantt).attach(gantt);
					flower.getView(FlowerTree).attach(tree);
					bottomPanel.setActive('Gantt');
					leftPanel.setActive(true);
				} else {
					bottomPanel.setActive(false);
					leftPanel.setActive(false);
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
