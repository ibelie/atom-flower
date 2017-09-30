"use 6to5";

const {CompositeDisposable} = require('atom');
const {registerOrUpdateElement, EventsDelegation, AncestorsMethods} = require('atom-utils');
const {include} = require('../utils');

const tagPrefix = 'atom-flower-';

class FlowerView {
	/**
	 * DOM callback invoked when a new FlowerView is created.
	 */
	createdCallback() {
		this.viewName = this.tagName.toLowerCase().substring(tagPrefix.length);
		this.withViewName = 'with-flower-' + this.viewName;

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
		 * @type {TextEditorElement}
		 * @access private
		 */
		this.editorElement = undefined;

		/**
		 * @type {boolean}
		 * @access private
		 */
		this.attachedToTextEditor = undefined;

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
		this.onCreated && this.onCreated();
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
	 * Returns the `TextEditorElement` for the Flower's `TextEditor`.
	 *
	 * @return {TextEditorElement} the flower's text editor element
	 */
	getTextEditorElement() {
		if (this.editorElement) { return this.editorElement; }
		this.editorElement = atom.views.getView(this.flower.editor);
		return this.editorElement;
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

		const container = parent || this.getTextEditorElement();
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
		this.attachedToTextEditor = this.queryParentSelector('atom-text-editor') === this.getTextEditorElement();
		if (this.attachedToTextEditor) {
			this.getTextEditorElement().setAttribute(this.withViewName, '')
		}
		this.onAttached && this.onAttached();
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
		this.onDetached && this.onDetached();
		this.getTextEditorElement().removeAttribute(this.withViewName);
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

		FlowerModel.View = registerOrUpdateElement(tagPrefix + name, {
			class: include(View, EventsDelegation, AncestorsMethods, FlowerView)
		});

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
