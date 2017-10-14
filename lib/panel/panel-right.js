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
			<div class = 'panel-tool panel-body'></div>
			<div class = 'panel-main panel-body'></div>
		`;
		this.style.width = this.width * 100 + 'vh';
		this.querySelector('.panel-tool').style.flexBasis = '350px';
		let panelBodyStyle = this.querySelector('.panel-body').style;
		panelBodyStyle.fontFamily = atom.config.get('editor.fontFamily');
		panelBodyStyle.fontSize = atom.config.get('editor.fontSize');
		panelBodyStyle.lineHeight = atom.config.get('editor.lineHeight');
	}

	/**
	 * Hide all tool panels.
	 */
	hideTools() {
		let tools = this.querySelectorAll('.panel-nav > span.panel-nav-item');
		if (tools.length) {
			Array.prototype.forEach.call(tools, (el) => el.classList.remove('is-selected'));
		}
		let tool = this.querySelector('.panel-tool');
		let toolRect = tool.getBoundingClientRect();
		if (!tool.style.display && toolRect.width) {
			let rect = this.getBoundingClientRect();
			this.width = (rect.width - toolRect.width) / rect.width * this.width;
			this.style.width = this.width * 100 + 'vh';
		}
		tool.style.display = 'none';
	}

	/**
	 * Show a tool panel.
	 */
	showTool(name) {
		let tool = this.querySelector('.panel-tool');
		if (tool.style.display) {
			tool.style.display = '';
			let rect = this.getBoundingClientRect();
			this.width = (rect.width + tool.getBoundingClientRect().width) / rect.width * this.width;
			this.style.width = this.width * 100 + 'vh';
		}

		let tabs = this.querySelectorAll('.panel-nav > span.panel-nav-item');
		if (tabs.length) {
			Array.prototype.forEach.call(tabs, (e) => e.classList.remove('is-selected'));
		}
		this.querySelector('.panel-nav > span.panel-tool-' + name).classList.add('is-selected');
		let panels = this.querySelectorAll('.panel-tool > div');
		if (panels.length) {
			Array.prototype.forEach.call(panels, (e) => e.style.display = 'none');
		}
		this.querySelector('.panel-tool > div.panel-' + name).style.display = '';
	}

	/**
	 * Activate this panel and hide all tools panel.
	 * @param {boolean} isActive
	 */
	setActive(flag) {
		this.hideTools();
		if (!flag) {
			this.panel.hide();
		} else {
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
		let tool = document.createElement('span');
		tool.classList.add('panel-nav-item');
		tool.classList.add('panel-tool-' + name);
		tool.innerHTML = `
			<span class = 'icon'>` + svg + `</span>`;
		this.querySelector('.panel-nav').appendChild(tool);

		let panel = document.createElement('div');
		panel.classList.add('panel-' + name);
		this.querySelector('.panel-tool').appendChild(panel);

		tool.addEventListener('click', (e) => {
			if (this.querySelector('.panel-nav > span.panel-tool-' + name).classList.contains('is-selected')) {
				this.hideTools();
			} else {
				this.showTool(name);
			}
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
		let rect = this.getBoundingClientRect();
		let width = rect.right - e.pageX;
		let total = rect.width / this.width;
		let header = this.querySelector('.panel-head').getBoundingClientRect().width;
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
