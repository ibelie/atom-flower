"use 6to5";

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
	 * Register drag functions to an element.
	 *
	 * @param  {HTMLElement} element the DOM node handle drag event
	 * @param  {onStart: function, onDrag: function, onStop: funciton} handler
	 */
	drag: (element, handler) => {
		element.addEventListener('mousedown', (e) => {
			handler.onStart && handler.onStart(e);
			var mousemove = (e) => handler.onDrag && handler.onDrag(e);
			var mouseup = (e) => {
				window.removeEventListener('mouseup', mouseup);
				window.removeEventListener('mousemove', mousemove);
				handler.onStop && handler.onStop(e);
			};
			window.addEventListener('mouseup', mouseup);
			window.addEventListener('mousemove', mousemove);
		});
	},

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
	include: (cls, ...mixins) => {
		mixins.forEach((mixin) => {
			includeMixin(cls, mixin);
		});
		return cls;
	}
}
