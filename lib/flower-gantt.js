"use 6to5";

const {CompositeDisposable} = require('atom');
const {registerOrUpdateElement} = require('atom-utils');

class FlowerGanttModel {
	/**
	 * Creates a new FlowerGanttModel instance for the given `Flower`.
	 *
	 * @param  {Flower} flower the origin flower instance
	 */
	constructor(flower) {
		this.flower = flower;
	}
}

class FlowerGantt {
	/**
	 * DOM callback invoked when a new FlowerGantt is created.
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
		this.style.height = '300px';
	}

	/**
	 * Defines the Flower model for this FlowerGantt instance.
	 *
	 * @param  {Flower} flower the Flower model for this instance.
	 * @return {Flower} this gantt's Flower
	 */
	setModel(flower) {
		this.flower = flower;
		this.subscriptions.add(this.flower.onDidDestroy(() => this.destroy()));
		this.subscriptions.add(this.flower.onDidChange((change) => this.requestUpdate()));

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
	 * Performs the actual FlowerGantt update.
	 *
	 * @access private
	 */
	update() {
		if (!(this.attached && this.flower)) { return; }
		const flower = this.flower;
	}

	/**
	 * Attaches the FlowerGantt to the DOM.
	 *
	 * @param  {HTMLElement} [parent] the DOM node where attaching the FlowerGantt
	 */
	attach(parent) {
		if (this.attached) { return; }

		const container = parent || atom.views.getView(this.flower.editor);
		let gantts = container.querySelectorAll('atom-flower-gantt');
		if (gantts.length) {
			Array.prototype.forEach.call(gantts, (el) => el.destroy());
		}
		container.appendChild(this);
	}

	/**
	 * DOM callback invoked when a new FlowerGantt is attached to the DOM.
	 *
	 * @access private
	 */
	attachedCallback() {
		this.attached = true;
	}

	/**
	 * Detaches the FlowerGantt from the DOM.
	 */
	detach() {
		if (this.attached && this.parentNode) {
			this.parentNode.removeChild(this);
		}
	}

	/**
	 * DOM callback invoked when a new FlowerGantt is detached from the DOM.
	 *
	 * @access private
	 */
	detachedCallback() {
		this.attached = false;
	}

	/**
	 * Destroys this FlowerGantt
	 */
	destroy() {
		this.subscriptions.dispose();
		this.detach();
		this.flower = null;
	}
}

const FlowerGanttView = registerOrUpdateElement('atom-flower-gantt', {class: FlowerGantt});

module.exports = {
	Model: FlowerGanttModel,

	/**
	 * Returns a {FlowerGanttView} for the passed-in model if it's a {FlowerGanttModel}.
	 *
	 * @param {*} model the model for which returning a view
	 * @return {FlowerGanttView}
	 */
	viewProvider: (model) => {
		if (model instanceof FlowerGanttModel) {
			const gantt = new FlowerGanttView();
			gantt.setModel(model.flower);
			return gantt;
		}
	}
};
