"use 6to5";

const {CompositeDisposable} = require('atom');
const {registerOrUpdateElement, EventsDelegation, AncestorsMethods} = require('atom-utils');
const {drag} = require('../utils');

class BottomPanel {
	/**
	 * DOM callback invoked when a new BottomPanel is created.
	 */
	createdCallback() {
		/**
		 * @type {Panel}
		 * @access private
		 */
		this.panel = undefined;

		/**
		 * @type {CompositeDisposable}
		 * @access private
		 */
		this.subscriptions = new CompositeDisposable();

		this.innerHTML = `
			<div class = 'resize-handle'></div>
			<h1>Hello Flower Panel</h1>
		`;
		this.style.height = '40vh';
	}

	/**
	 * Attaches the BottomPanel to a Footer Panel.
	 */
	attach() {
		if (!this.panel) {
			this.panel = atom.workspace.addFooterPanel({item: this, visible: false, priority: -1000});
		}
	}

	/**
	 * DOM callback invoked when a new BottomPanel is attached to the DOM.
	 */
	attachedCallback() {
		drag(this.querySelector('.resize-handle'), this);
	}

	onDrag(e) {
		this.style.height = (this.getBoundingClientRect().bottom - e.pageY) / window.innerHeight * 100 + 'vh';
	}

	/**
	 * Detaches the BottomPanel from the DOM.
	 */
	detach() {
		if (this.panel) {
			this.panel.destroy();
		}
	}

	/**
	 * DOM callback invoked when a new BottomPanel is detached from the DOM.
	 */
	detachedCallback() {
		console.info('BottomPanel detachedCallback');
	}

	/**
	 * Destroys this BottomPanel
	 */
	destroy() {
		this.subscriptions.dispose();
		this.detach();
	}
}

var BottomPanelElement = registerOrUpdateElement('atom-panel-flower-bottom', {class: BottomPanel});

module.exports = new BottomPanelElement();
