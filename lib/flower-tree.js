"use 6to5";

const {CompositeDisposable} = require('atom');
const {registerOrUpdateElement} = require('atom-utils');

class FlowerTreeModel {
	/**
	 * Creates a new FlowerTreeModel instance for the given `Flower`.
	 *
	 * @param  {Flower} flower the origin flower instance
	 */
	constructor(flower) {
		this.flower = flower;
	}
}

class FlowerTree {
	/**
	 * DOM callback invoked when a new FlowerTree is created.
	 */
	createdCallback() {
		/**
		 * @type {Flower}
		 * @access private
		 */
		this.flower = undefined;

		/**
		 * @type {boolean}
		 * @access private
		 */
		this.attached = undefined;

		/**
		 * @type {boolean}
		 * @access private
		 */
		this.frameRequested = undefined;

		/**
		 * @type {CompositeDisposable}
		 * @access private
		 */
		this.subscriptions = new CompositeDisposable();
		this.style.width = '500px';
	}

	/**
	 * Defines the Flower model for this FlowerTree instance.
	 *
	 * @param  {Flower} flower the Flower model for this instance.
	 * @return {Flower} this tree's Flower
	 */
	setModel(flower) {
		this.flower = flower;
		this.subscriptions.add(this.flower.onDidDestroy(() => {
			this.destroy();
		}));
		this.subscriptions.add(this.flower.onDidChange((change) => {
			this.requestUpdate();
		}));

		return this.flower;
	}

	/**
	 * Requests an update to be performed on the next frame.
	 */
	requestUpdate() {
		if (this.frameRequested) { return; }
		this.frameRequested = true;
		requestAnimationFrame(() => {
			this.update();
			this.frameRequested = false;
		});
	}

	/**
	 * Performs the actual FlowerTree update.
	 *
	 * @access private
	 */
	update() {
		if (!(this.attached && this.flower)) { return; }
		const flower = this.flower;
	}

	/**
	 * DOM callback invoked when a new FlowerTree is attached to the DOM.
	 *
	 * @access private
	 */
	attachedCallback() {
		this.attached = true;
	}

	/**
	 * Detaches the FlowerTree from the DOM.
	 */
	detach() {
		if (this.attached && this.parentNode) {
			this.parentNode.removeChild(this);
		}
	}

	/**
	 * DOM callback invoked when a new FlowerTree is detached from the DOM.
	 *
	 * @access private
	 */
	detachedCallback() {
		this.attached = false;
	}

	/**
	 * Destroys this FlowerTree
	 */
	destroy() {
		this.subscriptions.dispose();
		this.detach();
		this.flower = null;
	}
}

const FlowerTreeView = registerOrUpdateElement('atom-flower-tree', {class: FlowerTree});

module.exports = {
	Model: FlowerTreeModel,

	/**
	 * Returns a {FlowerTreeView} for the passed-in model if it's a {FlowerTreeModel}.
	 *
	 * @param {*} model the model for which returning a view
	 * @return {FlowerTreeView}
	 */
	viewProvider: (model) => {
		if (model instanceof FlowerTreeModel) {
			const tree = new FlowerTreeView();
			tree.setModel(model.flower);
			return tree;
		}
	}
};
