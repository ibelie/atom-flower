"use 6to5";

const FlowerView = require('./flower-view');

class FlowerTree {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<div class="gantt-chart" style="height: 339px; width: 1148px;">
				<div class="gantt-data-area" style="height: 309px; width: 1190px;">
					<div class="gantt-links-area" data-layer="true" style="width: 1190px;">
						<div class="gantt-link">
							<div style="top: 30.5px; left: 270px; height: 20px; width: 32px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 30.5px; left: 282px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 44px; left: 188px; height: 20px; width: 114px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 96px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 44px; left: 188px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 57.5px; left: 188px; height: 20px; width: 26px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 64.5px; left: 204px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
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
						<div class="gantt-link">
							<div style="top: 300.5px; left: 690px; height: 20px; width: 32px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 300.5px; left: 702px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 314px; left: 608px; height: 20px; width: 114px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 96px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 314px; left: 608px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 327.5px; left: 608px; height: 20px; width: 26px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 334.5px; left: 624px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
						</div>
						<div class="gantt-link">
							<div style="top: 327.5px; left: 900px; height: 20px; width: 32px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 327.5px; left: 912px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 341px; left: 888px; height: 20px; width: 44px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 26px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 341px; left: 888px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 354.5px; left: 888px; height: 20px; width: 26px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 361.5px; left: 904px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
						</div>
						<div class="gantt-link">
							<div style="top: 246.5px; left: 340px; height: 20px; width: 32px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 246.5px; left: 352px; height: 33.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 260px; left: 188px; height: 20px; width: 184px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 260px; left: 188px; height: 60.5px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 42.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 300.5px; left: 188px; height: 20px; width: 26px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 307.5px; left: 204px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
						</div>
						<div class="gantt-link">
							<div style="top: 219.5px; left: 270px; height: 20px; width: 32px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 219.5px; left: 282px; height: 20px; width: 90px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 72px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 219.5px; left: 352px; height: 47px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 246.5px; left: 346px; height: 20px; width: 26px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 253.5px; left: 350px;" class="gantt-link-arrow gantt-link-arrow-left"></div>
						</div>
						<div class="gantt-link">
							<div style="top: 273.5px; left: 188px; height: 20px; width: 32px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 273.5px; left: 188px; height: 20px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 273.5px; left: 188px; height: 47px; width: 20px;" class="gantt-link-wrapper">
								<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 300.5px; left: 188px; height: 20px; width: 26px;" class="gantt-link-wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 307.5px; left: 204px;" class="gantt-link-arrow gantt-link-arrow-right"></div>
						</div>
					</div>
					<div class="gantt-bars-area" data-layer="true" style="width: 1190px;">
						<div class="gantt-bar" style="left: 70px; top: 3px; height: 20px; line-height: 20px; width: 1050px;">
							<div style="width: 440px;" class="gantt-bar-trigger"></div>
							<div style="left: 440px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Site #1</div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 70px; top: 30px; height: 20px; line-height: 20px; width: 210px;">
							<div style="width: 208px;" class="gantt-bar-trigger"></div>
							<div style="left: 208px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Project Defenition</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 210px; top: 57px; height: 20px; line-height: 20px; width: 280px;">
							<div style="width: 234px;" class="gantt-bar-trigger"></div>
							<div style="left: 234px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Site Structure</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 350px; top: 84px; height: 20px; line-height: 20px; width: 350px;">
							<div style="width: 209px;" class="gantt-bar-trigger"></div>
							<div style="left: 209px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Visual Design</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 350px; top: 111px; height: 20px; line-height: 20px; width: 490px;">
							<div style="width: 146px;" class="gantt-bar-trigger"></div>
							<div style="left: 146px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Site development</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 700px; top: 138px; height: 20px; line-height: 20px; width: 280px;">
							<div style="width: 70px;" class="gantt-bar-trigger"></div>
							<div style="left: 70px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Test and Refine</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 980px; top: 165px; height: 20px; line-height: 20px; width: 140px;">
							<div style="width: 0px;" class="gantt-bar-trigger"></div>
							<div style="left: 0px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Launch</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 70px; top: 192px; height: 20px; line-height: 20px; width: 980px;">
							<div style="width: 245px;" class="gantt-bar-trigger"></div>
							<div style="left: 245px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Site #2</div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 70px; top: 219px; height: 20px; line-height: 20px; width: 210px;">
							<div style="width: 208px;" class="gantt-bar-trigger"></div>
							<div style="left: 208px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Project Defenition</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 140px; top: 246px; height: 20px; line-height: 20px; width: 210px;">
							<div style="width: 192px;" class="gantt-bar-trigger"></div>
							<div style="left: 192px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Site Structure</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 210px; top: 273px; height: 20px; line-height: 20px; width: 140px;">
							<div style="width: 138px;" class="gantt-bar-trigger"></div>
							<div style="left: 138px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Visual Design</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 210px; top: 300px; height: 20px; line-height: 20px; width: 490px;">
							<div style="width: 366px;" class="gantt-bar-trigger"></div>
							<div style="left: 366px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Site Development</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 630px; top: 327px; height: 20px; line-height: 20px; width: 280px;">
							<div style="width: 139px;" class="gantt-bar-trigger"></div>
							<div style="left: 139px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Test and Refine</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
						</div>
						<div class="gantt-bar" style="left: 910px; top: 354px; height: 20px; line-height: 20px; width: 140px;">
							<div style="width: 0px;" class="gantt-bar-trigger"></div>
							<div style="left: 0px;" class="gantt-bar-trigger-drag"></div>
							<div class="gantt-bar-name">Launch</div>
							<div class="gantt-bar-drag task-right"></div>
							<div class="gantt-bar-drag task-left"></div>
							<div class="gantt-link-control task-right" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
							<div class="gantt-link-control task-left" style="height: 22px; line-height: 22px;">
								<div class="gantt-link-point"></div>
							</div>
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
