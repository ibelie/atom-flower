"use 6to5";

const {Emitter, CompositeDisposable} = require('atom');

class Flower {
	/**
	 * Creates a new Flower instance for the given `TextEditor`.
	 *
	 * @param  {TextEditor} editor the target text editor for the flower
	 * @throws {Error} Cannot create a flower without an editor
	 */
	constructor(editor) {
		if (!editor) {
			throw new Error('Cannot create a flower without an editor');
		}

		/**
		 * The Flower's text editor.
		 *
		 * @type {TextEditor}
		 * @access private
		 */
		this.editor = editor;

		/**
		 * The events emitter of the current Flower.
		 *
		 * @type {Emitter}
		 * @access private
		 */
		this.emitter = new Emitter();

		/**
		 * The Flower's subscriptions.
		 *
		 * @type {CompositeDisposable}
		 * @access private
		 */
		this.subscriptions = new CompositeDisposable();
	}

	/**
	 * Destroys the flower instance.
	 */
	destroy() {
		this.subscriptions.dispose();
		this.subscriptions = null;
		this.emitter.emit('did-destroy');
		this.emitter.dispose();
		this.editor = null;
	}

	/**
	 * Emits a change events with the passed-in changes as data.
	 *
	 * @param  {Object} changes a change to dispatch
	 * @access private
	 */
	emitChanges(changes) {
		this.emitter.emit('did-change', changes);
	}

	/**
	 * Registers an event listener to the `did-change` event.
	 *
	 * @param  {function(event:Object):void} callback a function to call when the
	 *                                                event is triggered.
	 *                                                the callback will be called
	 *                                                with an event object with
	 *                                                the following properties:
	 * - start: The change's start row number
	 * - end: The change's end row number
	 * - screenDelta: the delta in buffer rows between the versions before and
	 *   after the change
	 * @return {Disposable} a disposable to stop listening to the event
	 */
	onDidChange(callback) {
		return this.emitter.on('did-change', callback);
	}

	/**
	 * Registers an event listener to the `did-destroy` event.
	 *
	 * This event is dispatched when this Flower have been destroyed. It can
	 * occurs either because the {@link destroy} method have been called on the
	 * Flower or because the target text editor have been destroyed.
	 *
	 * @param  {function():void} callback a function to call when the event
	 *                                    is triggered.
	 * @return {Disposable} a disposable to stop listening to the event
	 */
	onDidDestroy(callback) {
		return this.emitter.on('did-destroy', callback);
	}}

module.exports = Flower;