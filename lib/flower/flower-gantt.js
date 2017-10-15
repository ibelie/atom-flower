"use 6to5";

const FlowerView = require('./flower-view');

class FlowerGantt {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<div class="gantt-tree" style="height: 339px; width: 379px;">
				<div class="gantt-tree-scale" style="height: 29px; line-height: 28px; width: 379px;">
					<div class="gantt-tree-scale-name">Name</div>
				</div>
				<div class="gantt-tree-data" style="height: 309px; width: 379px;" data-layer="true">
					<div class="gantt-tree-row" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-icon gantt-close"></div>
							<div class="gantt-tree-icon gantt-folder-open"></div>
							<div class="gantt-tree-content">Site #1</div>
						</div>
					</div>
					<div class="gantt-tree-row odd" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Project Defenition</div>
						</div>
					</div>
					<div class="gantt-tree-row" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Site Structure</div>
						</div>
					</div>
					<div class="gantt-tree-row odd" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Visual Design</div>
						</div>
					</div>
					<div class="gantt-tree-row" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Site development</div>
						</div>
					</div>
					<div class="gantt-tree-row odd" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Test and Refine</div>
						</div>
					</div>
					<div class="gantt-tree-row" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Launch</div>
						</div>
					</div>
					<div class="gantt-tree-row odd" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-icon gantt-close"></div>
							<div class="gantt-tree-icon gantt-folder-open"></div>
							<div class="gantt-tree-content">Site #2</div>
						</div>
					</div>
					<div class="gantt-tree-row" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Project Defenition</div>
						</div>
					</div>
					<div class="gantt-tree-row odd" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Site Structure</div>
						</div>
					</div>
					<div class="gantt-tree-row" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Visual Design</div>
						</div>
					</div>
					<div class="gantt-tree-row odd" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Site Development</div>
						</div>
					</div>
					<div class="gantt-tree-row" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Test and Refine</div>
						</div>
					</div>
					<div class="gantt-tree-row odd" style="height: 27px; line-height: 27px;">
						<div class="gantt-tree-cell">
							<div class="gantt-tree-indent"></div>
							<div class="gantt-tree-icon gantt-blank"></div>
							<div class="gantt-tree-icon gantt-file"></div>
							<div class="gantt-tree-content">Launch</div>
						</div>
					</div>
				</div>
			</div>
			<div class="gantt-chart" style="height: 339px; width: 1148px;">
				<div class="gantt-scale" style="height: 29px; width: 1190px;">
					<div class="gantt-scale-row" style="height:29px;line-height:29px">
						<div class="gantt-scale-cell" style="width:70px;">07:00</div>
						<div class="gantt-scale-cell" style="width:70px;">08:00</div>
						<div class="gantt-scale-cell" style="width:70px;">09:00</div>
						<div class="gantt-scale-cell" style="width:70px;">10:00</div>
						<div class="gantt-scale-cell" style="width:70px;">11:00</div>
						<div class="gantt-scale-cell" style="width:70px;">12:00</div>
						<div class="gantt-scale-cell" style="width:70px;">13:00</div>
						<div class="gantt-scale-cell" style="width:70px;">14:00</div>
						<div class="gantt-scale-cell" style="width:70px;">15:00</div>
						<div class="gantt-scale-cell" style="width:70px;">16:00</div>
						<div class="gantt-scale-cell" style="width:70px;">17:00</div>
						<div class="gantt-scale-cell" style="width:70px;">18:00</div>
						<div class="gantt-scale-cell" style="width:70px;">19:00</div>
						<div class="gantt-scale-cell" style="width:70px;">20:00</div>
						<div class="gantt-scale-cell" style="width:70px;">21:00</div>
						<div class="gantt-scale-cell" style="width:70px;">22:00</div>
						<div class="gantt-scale-cell" style="width:70px;">23:00</div>
					</div>
				</div>
				<div class="gantt-data-area" style="height: 309px; width: 1190px;">
					<div class="gantt-data-bg" data-layer="true" style="width: 1190px;">
						<div class="gantt-data-row" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row odd" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row odd" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row odd" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row odd" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row odd" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row odd" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
						<div class="gantt-data-row odd" style="height: 27px;">
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
							<div style="width: 70px;" class="gantt-data-cell"></div>
						</div>
					</div>
					<div class="gantt-links-area" data-layer="true" style="width: 1190px;">
						<div class="gantt_task_link">
							<div style="top: 30.5px; left: 270px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 30.5px; left: 282px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 44px; left: 188px; height: 20px; width: 114px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 96px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 44px; left: 188px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 57.5px; left: 188px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 64.5px; left: 204px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 57.5px; left: 480px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 57.5px; left: 492px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 71px; left: 328px; height: 20px; width: 184px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 71px; left: 328px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 84.5px; left: 328px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 91.5px; left: 344px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 30.5px; left: 270px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 30.5px; left: 282px; height: 101px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 83px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 111.5px; left: 282px; height: 20px; width: 72px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 54px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 118.5px; left: 344px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 84.5px; left: 690px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 84.5px; left: 702px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 98px; left: 328px; height: 20px; width: 394px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 376px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 98px; left: 328px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 111.5px; left: 328px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 118.5px; left: 344px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 111.5px; left: 830px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 111.5px; left: 842px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 125px; left: 678px; height: 20px; width: 184px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 125px; left: 678px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 138.5px; left: 678px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 145.5px; left: 694px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 138.5px; left: 970px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 138.5px; left: 982px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 152px; left: 958px; height: 20px; width: 44px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 26px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 152px; left: 958px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 165.5px; left: 958px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 172.5px; left: 974px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 300.5px; left: 690px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 300.5px; left: 702px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 314px; left: 608px; height: 20px; width: 114px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 96px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 314px; left: 608px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 327.5px; left: 608px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 334.5px; left: 624px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 327.5px; left: 900px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 327.5px; left: 912px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 341px; left: 888px; height: 20px; width: 44px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 26px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 341px; left: 888px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 354.5px; left: 888px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 361.5px; left: 904px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 246.5px; left: 340px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 246.5px; left: 352px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 260px; left: 188px; height: 20px; width: 184px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 260px; left: 188px; height: 60.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 42.5px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 300.5px; left: 188px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 307.5px; left: 204px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 219.5px; left: 270px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 219.5px; left: 282px; height: 20px; width: 90px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 72px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 219.5px; left: 352px; height: 47px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 246.5px; left: 346px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 253.5px; left: 350px;" class="gantt_link_arrow gantt_link_arrow_left"></div>
						</div>
						<div class="gantt_task_link">
							<div style="top: 273.5px; left: 188px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 273.5px; left: 188px; height: 20px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 273.5px; left: 188px; height: 47px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 300.5px; left: 188px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;"></div>
							</div>
							<div style="top: 307.5px; left: 204px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
					</div>
					<div class="gantt_bars_area" data-layer="true" style="width: 1190px;">
						<div class="gantt_task_line owner_undefined gantt_dependent_task" style="left: 70px; top: 3px; height: 20px; line-height: 20px; width: 1050px;">
							<div style="width: 440px;" class="gantt_task_progress"></div>
							<div style="left: 440px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site #1</div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_1" style="left: 70px; top: 30px; height: 20px; line-height: 20px; width: 210px;">
							<div style="width: 208px;" class="gantt_task_progress"></div>
							<div style="left: 208px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Project Defenition</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_1" style="left: 210px; top: 57px; height: 20px; line-height: 20px; width: 280px;">
							<div style="width: 234px;" class="gantt_task_progress"></div>
							<div style="left: 234px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site Structure</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_3" style="left: 350px; top: 84px; height: 20px; line-height: 20px; width: 350px;">
							<div style="width: 209px;" class="gantt_task_progress"></div>
							<div style="left: 209px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Visual Design</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_2" style="left: 350px; top: 111px; height: 20px; line-height: 20px; width: 490px;">
							<div style="width: 146px;" class="gantt_task_progress"></div>
							<div style="left: 146px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site development</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_1" style="left: 700px; top: 138px; height: 20px; line-height: 20px; width: 280px;">
							<div style="width: 70px;" class="gantt_task_progress"></div>
							<div style="left: 70px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Test and Refine</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_3" style="left: 980px; top: 165px; height: 20px; line-height: 20px; width: 140px;">
							<div style="width: 0px;" class="gantt_task_progress"></div>
							<div style="left: 0px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Launch</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_0 gantt_dependent_task" style="left: 70px; top: 192px; height: 20px; line-height: 20px; width: 980px;">
							<div style="width: 245px;" class="gantt_task_progress"></div>
							<div style="left: 245px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site #2</div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_2" style="left: 70px; top: 219px; height: 20px; line-height: 20px; width: 210px;">
							<div style="width: 208px;" class="gantt_task_progress"></div>
							<div style="left: 208px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Project Defenition</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_2" style="left: 140px; top: 246px; height: 20px; line-height: 20px; width: 210px;">
							<div style="width: 192px;" class="gantt_task_progress"></div>
							<div style="left: 192px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site Structure</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_3" style="left: 210px; top: 273px; height: 20px; line-height: 20px; width: 140px;">
							<div style="width: 138px;" class="gantt_task_progress"></div>
							<div style="left: 138px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Visual Design</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_4" style="left: 210px; top: 300px; height: 20px; line-height: 20px; width: 490px;">
							<div style="width: 366px;" class="gantt_task_progress"></div>
							<div style="left: 366px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site Development</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_3" style="left: 630px; top: 327px; height: 20px; line-height: 20px; width: 280px;">
							<div style="width: 139px;" class="gantt_task_progress"></div>
							<div style="left: 139px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Test and Refine</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div class="gantt_task_line owner_1" style="left: 910px; top: 354px; height: 20px; line-height: 20px; width: 140px;">
							<div style="width: 0px;" class="gantt_task_progress"></div>
							<div style="left: 0px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Launch</div>
							<div class="gantt_task_drag task_right"></div>
							<div class="gantt_task_drag task_left"></div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="gantt_ver_scroll" style="display: block; height: 311px; width: 18px; top: 30px;">
				<div style="height: 408px;"></div>
			</div>
			<div class="gantt_hor_scroll" style="display: block; width: 1512px; height: 18px;">
				<div style="width: 1572px;"></div>
			</div>
		`;
	}

	/**
	 * Invoked after attached to 'TextEditor'.
	 */
	onAttached() {
		let path = this.flower.editor.getPath().split('/');
		path = path[path.length - 1].split('\\');
		this.querySelector('.gantt-tree-scale-name').innerHTML = path[path.length - 1] + '的Gantt样例';
	}

	/**
	 * Performs the actual FlowerGantt update.
	 */
	update() {
		const flower = this.flower;
	}
}

module.exports = FlowerView.Register('gantt', FlowerGantt);
