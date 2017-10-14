"use 6to5";

const {CompositeDisposable} = require('atom');
const {registerOrUpdateElement, EventsDelegation, AncestorsMethods} = require('atom-utils');
const {drag} = require('../utils');

class BottomPanel {
	/**
	 * DOM callback invoked when a new BottomPanel is created.
	 */
	createdCallback() {
		/**
		 * @type {Panel}
		 * @access private
		 */
		this.panel = undefined;

		/**
		 * @type {CompositeDisposable}
		 * @access private
		 */
		this.subscriptions = new CompositeDisposable();

		this.innerHTML = `
			<div class = 'resize-handle'></div>
			<div class = 'panel-head'>
				<div class = 'panel-group'>
					<span class = 'icon'>
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path d="M358.706587 239.137725C358.706587 141.02994 278.994012 61.317365 180.886228 61.317365 82.778443 61.317365 3.065868 141.02994 3.065868 239.137725c0 49.053892 18.39521 91.976048 49.053892 122.63473-6.131737 36.790419-12.263473 73.580838-12.263473 110.371258 0 171.688623 91.976048 318.850299 220.742515 398.562874l36.79042-147.161677c-73.580838-61.317365-116.502994-153.293413-116.502994-251.401197 0-18.39521 0-36.790419 6.131736-55.185629 91.976048 0 171.688623-79.712575 171.688623-177.820359z m153.293413-98.107785c61.317365 0 116.502994 18.39521 165.556886 42.922156-6.131737 18.39521-12.263473 42.922156-12.263473 61.317365 0 98.107784 79.712575 177.820359 177.820359 177.820359s177.820359-79.712575 177.82036-177.820359c0-98.107784-79.712575-177.820359-177.82036-177.820359-24.526946 0-42.922156 6.131737-67.449101 12.263473C702.083832 30.658683 610.107784 0 512 0 444.550898 0 377.101796 12.263473 321.916168 42.922156l79.712575 116.502994c36.790419-12.263473 73.580838-18.39521 110.371257-18.39521z m331.113772 343.377246c-6.131737 122.634731-73.580838 226.874251-177.820359 275.928143-30.658683-55.185629-91.976048-98.107784-159.42515-98.107784-98.107784 0-177.820359 79.712575-177.820359 177.820359 0 98.107784 79.712575 177.820359 177.820359 177.820359 73.580838 0 134.898204-42.922156 165.556887-110.371257 183.952096-67.449102 312.718563-239.137725 312.718563-441.48503v-30.658683c-6.131737 6.131737-141.02994 49.053892-141.029941 49.053893z"/>
						</svg>
					</span> Flower
				</div>
				<nav class='panel-group panel-nav'></nav>
			</div>
			<div class = 'panel-body'></div>
		`;
		this.style.height = '40vh';
		let panelBodyStyle = this.querySelector('.panel-body').style;
		panelBodyStyle.fontFamily = atom.config.get('editor.fontFamily');
		panelBodyStyle.fontSize = atom.config.get('editor.fontSize');
		panelBodyStyle.lineHeight = atom.config.get('editor.lineHeight');
	}

	/**
	 * Activate this panel with a tab name.
	 * @param {string} name tab name to be activated; null to hide this panel
	 */
	setActive(name) {
		if (!name) {
			this.panel.hide();
		} else {
			this.querySelector('.panel-nav > span.panel-tab-' + name).click();
			this.panel.show();
		}
	}

	/**
	 * Add a tab panel.
	 * @param {HTML} svg icon of this tab
	 * @param {string} name tab name
	 * @return {HTMLElement} the tab panel body
	 */
	addTabPanel(svg, name) {
		let tab = document.createElement('span');
		tab.classList.add('panel-nav-item');
		tab.classList.add('panel-tab-' + name);
		tab.innerHTML = `
			<span class = 'icon'>` + svg + `</span>
			<span class = 'panel-nav-label'>` + name + `</span>`;
		this.querySelector('.panel-nav').appendChild(tab);

		let panel = document.createElement('div');
		panel.classList.add('panel-' + name);
		this.querySelector('.panel-body').appendChild(panel);

		tab.addEventListener('click', (e) => {
			let tabs = this.querySelectorAll('.panel-nav > span.panel-nav-item');
			if (tabs.length) {
				Array.prototype.forEach.call(tabs, (el) => el.classList.remove('is-selected'));
			}
			this.querySelector('.panel-nav > span.panel-tab-' + name).classList.add('is-selected');
			let panels = this.querySelectorAll('.panel-body > div');
			if (panels.length) {
				Array.prototype.forEach.call(panels, (el) => el.style.display = 'none');
			}
			this.querySelector('.panel-body > div.panel-' + name).style.display = '';
		});
		tab.click();

		return panel;
	}

	/**
	 * Attaches the BottomPanel to a Footer Panel.
	 */
	attach() {
		if (!this.panel) {
			this.panel = atom.workspace.addFooterPanel({item: this, visible: false, priority: -1000});
		}
	}

	/**
	 * DOM callback invoked when a new BottomPanel is attached to the DOM.
	 */
	attachedCallback() {
		drag(this.querySelector('.resize-handle'), this);
	}

	onDrag(e) {
		let height = this.getBoundingClientRect().bottom - e.pageY;
		let header = this.querySelector('.panel-head').getBoundingClientRect().height;
		height = height > header ? height : header;
		this.style.height = height / window.innerHeight * 100 + 'vh';
	}

	/**
	 * Detaches the BottomPanel from the DOM.
	 */
	detach() {
		if (this.panel) {
			this.panel.destroy();
		}
	}

	/**
	 * DOM callback invoked when a new BottomPanel is detached from the DOM.
	 */
	detachedCallback() {
		console.info('BottomPanel detachedCallback');
	}

	/**
	 * Destroys this BottomPanel
	 */
	destroy() {
		this.subscriptions.dispose();
		this.detach();
	}
}

module.exports = registerOrUpdateElement('atom-panel-flower-bottom', {class: BottomPanel});
