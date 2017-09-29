"use 6to5";

const FlowerView = require('./flower-view');

class FlowerGantt {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.appendChild(document.createTextNode("Hello Flower Gantt"));
		var image = document.createElement('img');
		image.setAttribute('src', 'http://image.evget.com/images/RadiantQ/projectgantt1.png');
		this.appendChild(image);
	}

	/**
	 * Performs the actual FlowerGantt update.
	 */
	update() {
		const flower = this.flower;
	}
}

module.exports = FlowerView.Register('gantt', FlowerGantt);
