"use 6to5";

const {CompositeDisposable} = require('atom');
const {registerOrUpdateElement} = require('atom-utils');

class FlowerView {
	/**
	 * DOM callback invoked when a new FlowerView is created.
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
		this.onCreated();
	}

	/**
	 * Defines the Flower model for this FlowerView instance.
	 *
	 * @param  {Flower} flower the Flower model for this instance.
	 * @return {Flower} this view's Flower
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
			if (this.attached && this.flower) { this.update(); }
			this.frameRequested = false;
		});
	}

	/**
	 * Attaches the FlowerView to the DOM.
	 *
	 * @param  {HTMLElement} [parent] the DOM node where attaching the FlowerView
	 */
	attach(parent) {
		if (this.attached) { return; }

		const container = parent || atom.views.getView(this.flower.editor);
		let views = container.querySelectorAll(this.tagName.toLowerCase());
		if (views.length) {
			Array.prototype.forEach.call(views, (el) => el.destroy());
		}
		container.appendChild(this);
	}

	/**
	 * DOM callback invoked when a new FlowerView is attached to the DOM.
	 *
	 * @access private
	 */
	attachedCallback() {
		this.attached = true;
	}

	/**
	 * Detaches the FlowerView from the DOM.
	 */
	detach() {
		if (this.attached && this.parentNode) {
			this.parentNode.removeChild(this);
		}
	}

	/**
	 * DOM callback invoked when a new FlowerView is detached from the DOM.
	 *
	 * @access private
	 */
	detachedCallback() {
		this.attached = false;
	}

	/**
	 * Destroys this FlowerView
	 */
	destroy() {
		this.subscriptions.dispose();
		this.detach();
		this.flower = null;
	}
}

/**
 * Generates a decorator function to includes many `mixto` mixins into a class.
 *
 * @param  {...Mixin} mixins the mixins to include in the class
 * @return {function(cls:Function):Function} the decorator function that will
 *                                           include the specified mixins
 * @example
 * @include(SomeMixin)
 * export default class SomeClass {
 *   // ...
 * }
 */
function include(cls, ...mixins) {
	mixins.forEach((mixin) => {
		includeMixin(cls, mixin);
	});
	return cls;
}

function includeMixin(target, source) {
	Object.getOwnPropertyNames(source).forEach((k) => {
		if (['length', 'name', 'arguments', 'caller', 'prototype', 'includeInto'].indexOf(k) >= 0) {
			return;
		}

		let descriptor = Object.getOwnPropertyDescriptor(source, k);
		Object.defineProperty(target, k, descriptor);
	});

	Object.getOwnPropertyNames(source.prototype).forEach((k) => {
		if (k === 'constructor') {
			return;
		}

		let descriptor = Object.getOwnPropertyDescriptor(source.prototype, k);
		Object.defineProperty(target.prototype, k, descriptor);
	});
}

module.exports = {
	/**
	 * Register a new FlowerView for the given `name` and `View`.
	 *
	 * @param  {string} name name of this flower view
	 * @param  {FlowerView} View the origin flower view class
	 */
	Register: (name, View) => {
		class FlowerModel {
			/**
			 * Creates a new FlowerModel instance for the given `Flower`.
			 *
			 * @param  {Flower} flower the origin flower instance
			 */
			constructor(flower) {
				this.flower = flower;
			}
		}

		FlowerModel.View = registerOrUpdateElement('atom-flower-' + name, {class: include(View, FlowerView)});

		return {
			Model: FlowerModel,
			/**
			 * Returns a {FlowerView} for the passed-in model if it's a {FlowerModel}.
			 *
			 * @param {*} model the model for which returning a view
			 * @return {FlowerView}
			 */
			viewProvider: (model) => {
				if (model instanceof FlowerModel) {
					const view = new FlowerModel.View();
					view.setModel(model.flower);
					return view;
				}
			}
		};
	}
}
