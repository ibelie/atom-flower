"use 6to5";

const FlowerView = require('./flower-view');

class FlowerGantt {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<h1>Hello Flower Gantt</h1>
			<div class = 'resize-left'></div>
			<img src = 'http://image.evget.com/images/RadiantQ/projectgantt1.png' style = 'height: 10%; width: 10%;'></img>
		`;
	}

	/**
	 * Invoked after attached to 'TextEditor'.
	 */
	onAttached() {
		if (this.attachedToTextEditor) {
			this.getTextEditorElement().querySelector('div').style.height = '65%';
		}
	}

	/**
	 * Performs the actual FlowerGantt update.
	 */
	update() {
		const flower = this.flower;
	}
}

module.exports = FlowerView.Register('gantt', FlowerGantt);
