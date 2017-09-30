"use 6to5";

const FlowerView = require('./flower-view');

class FlowerGantt {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<h1>Hello Flower Gantt</h1>
			<h2 class = 'flower-name'></h2>
			<img src = 'http://image.evget.com/images/RadiantQ/projectgantt1.png'></img>
		`;
	}

	/**
	 * Invoked after attached to 'TextEditor'.
	 */
	onAttached() {
		this.querySelector('.flower-name').innerHTML = this.flower.editor.getPath();
	}

	/**
	 * Performs the actual FlowerGantt update.
	 */
	update() {
		const flower = this.flower;
	}
}

module.exports = FlowerView.Register('gantt', FlowerGantt);
