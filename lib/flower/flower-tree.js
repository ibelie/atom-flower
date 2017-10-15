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
						<div style="top: 24px; left: 240px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 57.5px; left: 480px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 57.5px; left: 492px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 71px; left: 328px; height: 20px; width: 184px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 71px; left: 328px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 84.5px; left: 328px; height: 20px; width: 26px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 91.5px; left: 344px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 30.5px; left: 270px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 30.5px; left: 282px; height: 101px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 83px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 111.5px; left: 282px; height: 20px; width: 72px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 54px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 118.5px; left: 344px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 84.5px; left: 690px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 84.5px; left: 702px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 98px; left: 328px; height: 20px; width: 394px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 376px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 98px; left: 328px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 111.5px; left: 328px; height: 20px; width: 26px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 118.5px; left: 344px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 111.5px; left: 830px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 111.5px; left: 842px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 125px; left: 678px; height: 20px; width: 184px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 125px; left: 678px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 138.5px; left: 678px; height: 20px; width: 26px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 145.5px; left: 694px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
					</div>
					<div class="gantt-link">
						<div style="top: 138.5px; left: 970px; height: 20px; width: 32px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 138.5px; left: 982px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 152px; left: 958px; height: 20px; width: 44px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 26px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 152px; left: 958px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
							<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 165.5px; left: 958px; height: 20px; width: 26px;" class="gantt-link-wrapper">
							<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
						</div>
						<div style="top: 172.5px; left: 974px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
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
					<div class="gantt-bar" style="left: 210px; top: 57px; height: 20px; line-height: 20px; width: 280px;">
						<div class="gantt-bar-name">Site Structure</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 350px; top: 84px; height: 20px; line-height: 20px; width: 350px;">
						<div class="gantt-bar-name">Visual Design</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 350px; top: 111px; height: 20px; line-height: 20px; width: 490px;">
						<div class="gantt-bar-name">Site development</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 700px; top: 138px; height: 20px; line-height: 20px; width: 280px;">
						<div class="gantt-bar-name">Test and Refine</div>
						<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
						<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
							<div class="gantt-link-point"></div>
						</div>
					</div>
					<div class="gantt-bar" style="left: 980px; top: 165px; height: 20px; line-height: 20px; width: 140px;">
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
