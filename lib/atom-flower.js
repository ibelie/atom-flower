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
<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="423"><path d="M358.706587 239.137725C358.706587 141.02994 278.994012 61.317365 180.886228 61.317365 82.778443 61.317365 3.065868 141.02994 3.065868 239.137725c0 49.053892 18.39521 91.976048 49.053892 122.63473-6.131737 36.790419-12.263473 73.580838-12.263473 110.371258 0 171.688623 91.976048 318.850299 220.742515 398.562874l36.79042-147.161677c-73.580838-61.317365-116.502994-153.293413-116.502994-251.401197 0-18.39521 0-36.790419 6.131736-55.185629 91.976048 0 171.688623-79.712575 171.688623-177.820359z m153.293413-98.107785c61.317365 0 116.502994 18.39521 165.556886 42.922156-6.131737 18.39521-12.263473 42.922156-12.263473 61.317365 0 98.107784 79.712575 177.820359 177.820359 177.820359s177.820359-79.712575 177.82036-177.820359c0-98.107784-79.712575-177.820359-177.82036-177.820359-24.526946 0-42.922156 6.131737-67.449101 12.263473C702.083832 30.658683 610.107784 0 512 0 444.550898 0 377.101796 12.263473 321.916168 42.922156l79.712575 116.502994c36.790419-12.263473 73.580838-18.39521 110.371257-18.39521z m331.113772 343.377246c-6.131737 122.634731-73.580838 226.874251-177.820359 275.928143-30.658683-55.185629-91.976048-98.107784-159.42515-98.107784-98.107784 0-177.820359 79.712575-177.820359 177.820359 0 98.107784 79.712575 177.820359 177.820359 177.820359 73.580838 0 134.898204-42.922156 165.556887-110.371257 183.952096-67.449102 312.718563-239.137725 312.718563-441.48503v-30.658683c-6.131737 6.131737-141.02994 49.053892-141.029941 49.053893z" p-id="424"/></svg>

<svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1762"><path d="M23.881 62.017h289.82v167.793h-289.82v-167.793zM283.194 519.627h289.82v167.793h-289.82v-167.793zM283.194 115.402h137.283v45.761h-137.283v-45.761zM367.089 145.909h45.761v160.164h-45.761v-160.164zM367.089 428.107h45.761v160.164h-45.761v-160.164zM573.015 618.775h137.283v45.761h-137.283v-45.761zM664.537 649.283h45.761v129.658h-45.761v-129.658zM939.107 313.699v91.524h-594.898v-91.524h594.898M1000.119 252.685h-716.929v213.553h716.929v-213.553zM939.107 817.074v83.893h-305.074v-83.893h305.074M1000.119 756.060h-427.107v205.926h427.107v-205.926z" p-id="1763"/></svg>

 */

function showFlower(editor) {
	var path = editor && editor.getPath();
	if (path && path.endsWith('.flw')) {
		var flower = Flower.forEditor(editor);
		flower.getView(FlowerGantt).attach(BottomPanel);
		flower.getView(FlowerTree).attach(BottomPanel);
		BottomPanel.panel.show();
	} else {
		BottomPanel.panel.hide();
	}
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
		BottomPanel.attach();
		if (!subscriptions) {
			subscriptions = new CompositeDisposable();
			subscriptions.add(atom.workspace.observeActiveTextEditor(showFlower));
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
