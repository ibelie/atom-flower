"use 6to5";

const FlowerView = require('./flower-view');

class FlowerTree {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<h1>Hello Flower Tree</h1>
			<h2 class = 'flower-name'></h2>
			<img src = 'http://www.egs.gov.cn/wcm.files/upload/CMSegs/201512/0201512141128016.jpg'></img>
		`;
	}

	/**
	 * Invoked after attached to 'TextEditor'.
	 */
	onAttached() {
		this.querySelector('.flower-name').innerHTML = this.flower.editor.getPath();
	}

	/**
	 * Performs the actual FlowerTree update.
	 */
	update() {
		const flower = this.flower;
	}

}

module.exports = FlowerView.Register('tree', FlowerTree);
