"use 6to5";

const FlowerView = require('./flower-view');

class FlowerTree {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<div class="tree-chart" style="height: 1339px; width: 1148px;">
				<div class="tree-links-area" data-layer="true" style="width: 1190px;">
					<div class="tree-link">
						<div style="top: 30.5px; left: 150px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 17px; left: 162px; height: 33.5px; width: 20px;" class="tree-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 17px; left: 162px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 24px; left: 184px;" class="tree-link-arrow tree-link-arrow-right"></div>
					</div>
					<div class="tree-link">
						<div style="top: 17px; left: 301px; height: 20px; width: 43px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 25px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 24px; left: 334px;" class="tree-link-arrow tree-link-arrow-right"></div>
					</div>
					<div class="tree-link">
						<div style="top: 30.5px; left: 150px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 30.5px; left: 162px; height: 47px; width: 20px;" class="tree-link-wrapper">
							<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 57.5px; left: 162px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 64.5px; left: 184px;" class="tree-link-arrow tree-link-arrow-right"></div>
					</div>
					<div class="tree-link">
						<div style="top: 57.5px; left: 301px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 44px; left: 313px; height: 33.5px; width: 20px;" class="tree-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 44px; left: 313px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 51px; left: 335px;" class="tree-link-arrow tree-link-arrow-right"></div>
					</div>
					<div class="tree-link">
						<div style="top: 57.5px; left: 301px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 57.5px; left: 313px; height: 33.5px; width: 20px;" class="tree-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 71px; left: 313px; height: 20px; width: 32px;" class="tree-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 78px; left: 335px;" class="tree-link-arrow tree-link-arrow-right"></div>
					</div>
				</div>
				<div class="tree-bars-area" data-layer="true" style="width: 1190px;">
					<div class="tree-bar" style="left: 10px; top: 30px; height: 20px; line-height: 20px; width: 150px;">
						<div class="tree-bar-name">Project Defenition</div>
						<div class="tree-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
						<div class="tree-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
					</div>
					<div class="tree-bar" style="left: 190px; top: 16.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="tree-bar-name">Site Structure</div>
						<div class="tree-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
						<div class="tree-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
					</div>
					<div class="tree-bar" style="left: 340px; top: 16.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="tree-bar-name">Visual Design</div>
						<div class="tree-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
						<div class="tree-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
					</div>
					<div class="tree-bar" style="left: 190px; top: 57px; height: 20px; line-height: 20px; width: 120px;">
						<div class="tree-bar-name">Site development</div>
						<div class="tree-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
						<div class="tree-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
					</div>
					<div class="tree-bar" style="left: 340px; top: 43.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="tree-bar-name">Test and Refine</div>
						<div class="tree-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
						<div class="tree-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
					</div>
					<div class="tree-bar" style="left: 340px; top: 70.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="tree-bar-name">Launch</div>
						<div class="tree-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
						<div class="tree-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="tree-link-point"></div>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	/**
	 * Invoked after attached to 'TextEditor'.
	 */
	onAttached() {
		// this.querySelector('.flower-name').innerHTML = this.flower.editor.getPath();
	}

	/**
	 * Performs the actual FlowerTree update.
	 */
	update() {
		const flower = this.flower;
	}

}

module.exports = FlowerView.Register('tree', FlowerTree);
