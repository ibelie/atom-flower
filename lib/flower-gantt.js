"use 6to5";

const {registerOrUpdateElement} = require('atom-utils');

class FlowerGantt {
	/**
	 * DOM callback invoked when a new MinimapElement is created.
	 */
	createdCallback() {
		this.style.width = '500px';
	}
}

module.exports = registerOrUpdateElement('atom-flower-gantt', {class: FlowerGantt})
