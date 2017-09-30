"use 6to5";

const FlowerView = require('./flower-view');

class FlowerTreeResizer {
	constructor(tree) {
		this.tree = tree;
	}

	onStart(e) {
		this.startWidth = parseFloat(window.getComputedStyle(this.tree).width);
		this.totalWidth = this.startWidth * 100.0 / parseFloat(this.tree.style.width);
		this.startWidth += e.x;
	}

	onDrag(e) {
		this.tree.style.width = (this.startWidth - e.x) * 100 / this.totalWidth + '%';
	}
}

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
		this.style.width = '40%';
	}

	/**
	 * Invoked after attached to 'TextEditor'.
	 */
	onAttached() {
		this.drag(this.querySelector('.resize-left'), new FlowerTreeResizer(this));
	}

	/**
	 * Performs the actual FlowerTree update.
	 */
	update() {
		const flower = this.flower;
	}

}

module.exports = FlowerView.Register('tree', FlowerTree);
