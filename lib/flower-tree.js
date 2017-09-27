"use 6to5";

const {registerOrUpdateElement} = require('atom-utils');

class FlowerTree {
	/**
	 * DOM callback invoked when a new MinimapElement is created.
	 */
	createdCallback() {
		this.style.height = '200px';
	}
}

module.exports = registerOrUpdateElement('atom-flower-tree', {class: FlowerTree})
