"use 6to5";

const {CompositeDisposable} = require('atom');
const {registerOrUpdateElement, EventsDelegation, AncestorsMethods} = require('atom-utils');
const {drag} = require('../utils');

class RightPanel {
	/**
	 * DOM callback invoked when a new RightPanel is created.
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

		/**
		 * @type {number}
		 * @access private
		 */
		this.width = 0.4;

		this.innerHTML = `
			<div class = 'resize-handle'></div>
			<div class = 'panel-head'>
				<nav class='panel-group panel-nav'></nav>
			</div>
			<div class = 'panel-tool panel-body' tabIndex='0' style = 'padding: 10px;'></div>
			<div class = 'panel-main panel-body' tabIndex='0' style = 'padding: 10px;'></div>
		`;
		this.style.width = this.width * 100 + 'vh';
		var panelBodyStyle = this.querySelector('.panel-body').style;
		panelBodyStyle.fontFamily = atom.config.get('editor.fontFamily');
		panelBodyStyle.fontSize = atom.config.get('editor.fontSize');
		panelBodyStyle.lineHeight = atom.config.get('editor.lineHeight');
	}

	/**
	 * Activate this panel and hide all tools panel.
	 * @param {boolean} isActive
	 */
	setActive(flag) {
		if (!flag) {
			this.panel.hide();
		} else {
			let tools = this.querySelectorAll('.panel-nav > span.panel-nav-item');
			if (tools.length) {
				Array.prototype.forEach.call(tools, (el) => el.classList.remove('is-selected'));
			}
			let panels = this.querySelectorAll('.panel-tool > div');
			if (panels.length) {
				Array.prototype.forEach.call(panels, (el) => el.style.display = 'none');
			}
			this.panel.show();
		}
	}

	/**
	 * Add the main panel body.
	 * @return {HTMLElement} the main panel body
	 */
	getMainPanel() {
		return this.querySelector('.panel-main');
	}

	/**
	 * Add a tool panel.
	 * @param {HTML} svg icon of this tool
	 * @param {string} name tool name
	 * @return {HTMLElement} the tool panel body
	 */
	addToolPanel(svg, name) {
		var tool = document.createElement('span');
		tool.classList.add('panel-nav-item');
		tool.classList.add('panel-tool-' + name);
		tool.innerHTML = `
			<span class = 'icon'>` + svg + `</span>`;
		this.querySelector('.panel-nav').appendChild(tool);

		var panel = document.createElement('div');
		panel.classList.add('panel-' + name);
		this.querySelector('.panel-tool').appendChild(panel);

		tool.addEventListener('click', (e) => {
			let tabs = this.querySelectorAll('.panel-nav > span.panel-nav-item');
			if (tabs.length) {
				Array.prototype.forEach.call(tabs, (el) => el.classList.remove('is-selected'));
			}
			this.querySelector('.panel-nav > span.panel-tool-' + name).classList.add('is-selected');
			let panels = this.querySelectorAll('.panel-tool > div');
			if (panels.length) {
				Array.prototype.forEach.call(panels, (el) => el.style.display = 'none');
			}
			this.querySelector('.panel-tool > div.panel-' + name).style.display = '';
		});
		tool.click();

		return panel;
	}

	/**
	 * Attaches the RightPanel to a Right Panel.
	 */
	attach() {
		if (!this.panel) {
			this.panel = atom.workspace.addRightPanel({item: this, visible: false, priority: -1000});
		}
	}

	/**
	 * DOM callback invoked when a new RightPanel is attached to the DOM.
	 */
	attachedCallback() {
		drag(this.querySelector('.resize-handle'), this);
	}

	onDrag(e) {
		var rect = this.getBoundingClientRect();
		var width = rect.right - e.pageX;
		var total = rect.width / this.width;
		var header = this.querySelector('.panel-head').getBoundingClientRect().width;
		width = width > header ? width : header;
		this.width = width / total;
		this.style.width = this.width * 100 + 'vh';
	}

	/**
	 * Detaches the RightPanel from the DOM.
	 */
	detach() {
		if (this.panel) {
			this.panel.destroy();
		}
	}

	/**
	 * DOM callback invoked when a new RightPanel is detached from the DOM.
	 */
	detachedCallback() {
		console.info('RightPanel detachedCallback');
	}

	/**
	 * Destroys this RightPanel
	 */
	destroy() {
		this.subscriptions.dispose();
		this.detach();
	}
}

module.exports = registerOrUpdateElement('atom-panel-flower-right', {class: RightPanel});
