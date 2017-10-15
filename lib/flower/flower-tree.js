"use 6to5";

const FlowerView = require('./flower-view');

class FlowerTree {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<div class="tree-chart" style="height: 1339px; width: 1148px;">
				<div class="gantt-links-area" data-layer="true" style="width: 1190px;">
					<div class="gantt-link">
						<div style="top: 30.5px; left: 210px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 17px; left: 222px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 17px; left: 222px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 24px; left: 244px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 17px; left: 361px; height: 20px; width: 43px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 25px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 24px; left: 394px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 30.5px; left: 210px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 30.5px; left: 222px; height: 47px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 57.5px; left: 222px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 64.5px; left: 244px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 57.5px; left: 361px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 44px; left: 373px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 44px; left: 373px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 51px; left: 395px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 57.5px; left: 361px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 57.5px; left: 373px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 71px; left: 373px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 78px; left: 395px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
				</div>
				<div class="gantt-bars-area" data-layer="true" style="width: 1190px;">
					<div class="gantt-bar" style="left: 70px; top: 30px; height: 20px; line-height: 20px; width: 150px;">
						<div class="gantt-bar-name">Project Defenition</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 250px; top: 16.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="gantt-bar-name">Site Structure</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 400px; top: 16.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="gantt-bar-name">Visual Design</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 250px; top: 57px; height: 20px; line-height: 20px; width: 120px;">
						<div class="gantt-bar-name">Site development</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 400px; top: 43.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="gantt-bar-name">Test and Refine</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 400px; top: 70.5px; height: 20px; line-height: 20px; width: 120px;">
						<div class="gantt-bar-name">Launch</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
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
