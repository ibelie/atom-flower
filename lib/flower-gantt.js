"use 6to5";

const FlowerView = require('./flower-view');

class FlowerGantt {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.appendChild(document.createTextNode("Hello Flower Gantt" + new Array(100).join(" a")));
	}

	/**
	 * Performs the actual FlowerGantt update.
	 */
	update() {
		const flower = this.flower;
	}
}

module.exports = FlowerView.Register('gantt', FlowerGantt);
