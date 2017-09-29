"use 6to5";

const FlowerView = require('./flower-view');

class FlowerTree {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<div class = 'resize-left'></div>
			<h1>Hello Flower Tree</h1>
			<img src = 'http://www.egs.gov.cn/wcm.files/upload/CMSegs/201512/0201512141128016.jpg'></img>
		`;
	}

	/**
	 * Performs the actual FlowerTree update.
	 */
	update() {
		const flower = this.flower;
	}

}

module.exports = FlowerView.Register('tree', FlowerTree);
