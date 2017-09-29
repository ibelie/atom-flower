"use 6to5";

const FlowerView = require('./flower-view');

class FlowerTree {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.appendChild(document.createTextNode("Hello Flower Tree"));
		var image = document.createElement('img');
		image.setAttribute('src', 'http://www.egs.gov.cn/wcm.files/upload/CMSegs/201512/0201512141128016.jpg');
		this.appendChild(image);
	}

	/**
	 * Performs the actual FlowerTree update.
	 */
	update() {
		const flower = this.flower;
	}

}

module.exports = FlowerView.Register('tree', FlowerTree);
