"use 6to5";

const FlowerView = require('./flower-view');

class FlowerGantt {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<div class="gantt_grid" style="height: 339px; width: 379px;">
				<div class="gantt_grid_scale" style="height: 29px; line-height: 28px; width: 379px;">
					<div class="gantt_grid_head_cell gantt_grid_head_text  " style="width:196px;" column_id="text">炮塔</div>
				</div>
				<div class="gantt_grid_data" style="height: 309px; width: 379px;" data-layer="true">
					<div class="gantt_row" style="height: 27px; line-height: 27px;" task_id="1">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_icon gantt_close"></div>
							<div class="gantt_tree_icon gantt_folder_open"></div>
							<div class="gantt_tree_content">Site #1</div>
						</div>
					</div>
					<div class="gantt_row odd" style="height: 27px; line-height: 27px;" task_id="1379082074907">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Project Defenition</div>
						</div>
					</div>
					<div class="gantt_row" style="height: 27px; line-height: 27px;" task_id="1379082074911">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Site Structure</div>
						</div>
					</div>
					<div class="gantt_row odd" style="height: 27px; line-height: 27px;" task_id="1379082074912">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Visual Design</div>
						</div>
					</div>
					<div class="gantt_row" style="height: 27px; line-height: 27px;" task_id="1379082074913">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Site development</div>
						</div>
					</div>
					<div class="gantt_row odd" style="height: 27px; line-height: 27px;" task_id="1379082074914">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Test and Refine</div>
						</div>
					</div>
					<div class="gantt_row" style="height: 27px; line-height: 27px;" task_id="1379082074915">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Launch</div>
						</div>
					</div>
					<div class="gantt_row odd" style="height: 27px; line-height: 27px;" task_id="1379339521965">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_icon gantt_close"></div>
							<div class="gantt_tree_icon gantt_folder_open"></div>
							<div class="gantt_tree_content">Site #2</div>
						</div>
					</div>
					<div class="gantt_row" style="height: 27px; line-height: 27px;" task_id="1379339521969">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Project Defenition</div>
						</div>
					</div>
					<div class="gantt_row odd" style="height: 27px; line-height: 27px;" task_id="1379339521970">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Site Structure</div>
						</div>
					</div>
					<div class="gantt_row" style="height: 27px; line-height: 27px;" task_id="1379339521971">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Visual Design</div>
						</div>
					</div>
					<div class="gantt_row odd" style="height: 27px; line-height: 27px;" task_id="1379339521972">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Site Development</div>
						</div>
					</div>
					<div class="gantt_row" style="height: 27px; line-height: 27px;" task_id="1379339521973">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Test and Refine</div>
						</div>
					</div>
					<div class="gantt_row odd" style="height: 27px; line-height: 27px;" task_id="1379339521974">
						<div class="gantt_cell" style="width:196px;">
							<div class="gantt_tree_indent"></div>
							<div class="gantt_tree_icon gantt_blank"></div>
							<div class="gantt_tree_icon gantt_file"></div>
							<div class="gantt_tree_content">Launch</div>
						</div>
					</div>
				</div>
			</div>
			<div class="gantt_task" style="height: 339px; width: 1148px;">
				<div class="gantt_task_scale" style="height: 29px; width: 1190px;">
					<div class="gantt_scale_line" style="height:29px;line-height:29px">
						<div class="gantt_scale_cell" style="width:70px;">07:00</div>
						<div class="gantt_scale_cell" style="width:70px;">08:00</div>
						<div class="gantt_scale_cell" style="width:70px;">09:00</div>
						<div class="gantt_scale_cell" style="width:70px;">10:00</div>
						<div class="gantt_scale_cell" style="width:70px;">11:00</div>
						<div class="gantt_scale_cell" style="width:70px;">12:00</div>
						<div class="gantt_scale_cell" style="width:70px;">13:00</div>
						<div class="gantt_scale_cell" style="width:70px;">14:00</div>
						<div class="gantt_scale_cell" style="width:70px;">15:00</div>
						<div class="gantt_scale_cell" style="width:70px;">16:00</div>
						<div class="gantt_scale_cell" style="width:70px;">17:00</div>
						<div class="gantt_scale_cell" style="width:70px;">18:00</div>
						<div class="gantt_scale_cell" style="width:70px;">19:00</div>
						<div class="gantt_scale_cell" style="width:70px;">20:00</div>
						<div class="gantt_scale_cell" style="width:70px;">21:00</div>
						<div class="gantt_scale_cell" style="width:70px;">22:00</div>
						<div class="gantt_scale_cell gantt_last_cell" style="width:70px;">23:00</div>
					</div>
				</div>
				<div class="gantt_data_area" style="height: 309px; width: 1190px;">
					<div class="gantt_task_bg" data-layer="true" style="width: 1190px;">
						<div class="gantt_task_row" style="height: 27px;" task_id="1">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row odd" style="height: 27px;" task_id="1379082074907">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row" style="height: 27px;" task_id="1379082074911">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row odd" style="height: 27px;" task_id="1379082074912">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row" style="height: 27px;" task_id="1379082074913">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row odd" style="height: 27px;" task_id="1379082074914">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row" style="height: 27px;" task_id="1379082074915">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row odd" style="height: 27px;" task_id="1379339521965">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row" style="height: 27px;" task_id="1379339521969">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row odd" style="height: 27px;" task_id="1379339521970">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row" style="height: 27px;" task_id="1379339521971">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row odd" style="height: 27px;" task_id="1379339521972">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row" style="height: 27px;" task_id="1379339521973">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
						<div class="gantt_task_row odd" style="height: 27px;" task_id="1379339521974">
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell"></div>
							<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
						</div>
					</div>
					<div class="gantt_links_area" data-layer="true" style="width: 1190px;">
						<div class="gantt_task_link" link_id="1379082074916">
							<div style="top: 30.5px; left: 270px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 30.5px; left: 282px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 44px; left: 188px; height: 20px; width: 114px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 96px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 44px; left: 188px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 57.5px; left: 188px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 64.5px; left: 204px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379082074917">
							<div style="top: 57.5px; left: 480px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 57.5px; left: 492px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 71px; left: 328px; height: 20px; width: 184px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 71px; left: 328px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 84.5px; left: 328px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 91.5px; left: 344px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379082074918">
							<div style="top: 30.5px; left: 270px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 30.5px; left: 282px; height: 101px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 83px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 111.5px; left: 282px; height: 20px; width: 72px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 54px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 118.5px; left: 344px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379082074919">
							<div style="top: 84.5px; left: 690px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 84.5px; left: 702px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 98px; left: 328px; height: 20px; width: 394px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 376px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 98px; left: 328px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 111.5px; left: 328px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 118.5px; left: 344px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379082074920">
							<div style="top: 111.5px; left: 830px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 111.5px; left: 842px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 125px; left: 678px; height: 20px; width: 184px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 125px; left: 678px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 138.5px; left: 678px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 145.5px; left: 694px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379082074921">
							<div style="top: 138.5px; left: 970px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 138.5px; left: 982px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 152px; left: 958px; height: 20px; width: 44px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 26px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 152px; left: 958px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 165.5px; left: 958px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 172.5px; left: 974px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379339923984">
							<div style="top: 300.5px; left: 690px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 300.5px; left: 702px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 314px; left: 608px; height: 20px; width: 114px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 96px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 314px; left: 608px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 327.5px; left: 608px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 334.5px; left: 624px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379339923985">
							<div style="top: 327.5px; left: 900px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 327.5px; left: 912px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 341px; left: 888px; height: 20px; width: 44px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 26px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 341px; left: 888px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 354.5px; left: 888px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 361.5px; left: 904px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379339923987">
							<div style="top: 246.5px; left: 340px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 246.5px; left: 352px; height: 33.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 15.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 260px; left: 188px; height: 20px; width: 184px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 166px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 260px; left: 188px; height: 60.5px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 42.5px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 300.5px; left: 188px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 307.5px; left: 204px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
						<div class="gantt_task_link" link_id="1379339923988">
							<div style="top: 219.5px; left: 270px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 219.5px; left: 282px; height: 20px; width: 90px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 72px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 219.5px; left: 352px; height: 47px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 246.5px; left: 346px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 253.5px; left: 350px;" class="gantt_link_arrow gantt_link_arrow_left"></div>
						</div>
						<div class="gantt_task_link" link_id="1379339923989">
							<div style="top: 273.5px; left: 188px; height: 20px; width: 32px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
							</div>
							<div style="top: 273.5px; left: 188px; height: 20px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_up"></div>
							</div>
							<div style="top: 273.5px; left: 188px; height: 47px; width: 20px;" class="gantt_line_wrapper">
								<div style="height: 29px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
							</div>
							<div style="top: 300.5px; left: 188px; height: 20px; width: 26px;" class="gantt_line_wrapper">
								<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
							</div>
							<div style="top: 307.5px; left: 204px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
						</div>
					</div>
					<div class="gantt_bars_area" data-layer="true" style="width: 1190px;">
						<div task_id="1" class="gantt_task_line owner_undefined gantt_dependent_task" style="left: 70px; top: 2px; height: 22px; line-height: 22px; width: 1050px;">
							<div style="width: 440px;" class="gantt_task_progress"><span>42% </span></div>
							<div style="left: 440px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site #1</div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div task_id="1379082074907" class="gantt_task_line owner_1" style="left: 70px; top: 29px; height: 22px; line-height: 22px; width: 210px;">
							<div style="width: 208px;" class="gantt_task_progress"><span>100% </span></div>
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
						<div task_id="1379082074911" class="gantt_task_line owner_1" style="left: 210px; top: 56px; height: 22px; line-height: 22px; width: 280px;">
							<div style="width: 234px;" class="gantt_task_progress"><span>84% </span></div>
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
						<div task_id="1379082074912" class="gantt_task_line owner_3" style="left: 350px; top: 83px; height: 22px; line-height: 22px; width: 350px;">
							<div style="width: 209px;" class="gantt_task_progress"><span>60% </span></div>
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
						<div task_id="1379082074913" class="gantt_task_line owner_2" style="left: 350px; top: 110px; height: 22px; line-height: 22px; width: 490px;">
							<div style="width: 146px;" class="gantt_task_progress"><span>30% </span></div>
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
						<div task_id="1379082074914" class="gantt_task_line owner_1" style="left: 700px; top: 137px; height: 22px; line-height: 22px; width: 280px;">
							<div style="width: 70px;" class="gantt_task_progress"><span>25% </span></div>
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
						<div task_id="1379082074915" class="gantt_task_line owner_3" style="left: 980px; top: 164px; height: 22px; line-height: 22px; width: 140px;">
							<div style="width: 0px;" class="gantt_task_progress"><span>0% </span></div>
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
						<div task_id="1379339521965" class="gantt_task_line owner_0 gantt_dependent_task" style="left: 70px; top: 191px; height: 22px; line-height: 22px; width: 980px;">
							<div style="width: 245px;" class="gantt_task_progress"><span>25% </span></div>
							<div style="left: 245px;" class="gantt_task_progress_drag"></div>
							<div class="gantt_task_content">Site #2</div>
							<div class="gantt_link_control task_right" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
							<div class="gantt_link_control task_left" style="height: 22px; line-height: 22px;">
								<div class="gantt_link_point"></div>
							</div>
						</div>
						<div task_id="1379339521969" class="gantt_task_line owner_2" style="left: 70px; top: 218px; height: 22px; line-height: 22px; width: 210px;">
							<div style="width: 208px;" class="gantt_task_progress"><span>100% </span></div>
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
						<div task_id="1379339521970" class="gantt_task_line owner_2" style="left: 140px; top: 245px; height: 22px; line-height: 22px; width: 210px;">
							<div style="width: 192px;" class="gantt_task_progress"><span>92% </span></div>
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
						<div task_id="1379339521971" class="gantt_task_line owner_3" style="left: 210px; top: 272px; height: 22px; line-height: 22px; width: 140px;">
							<div style="width: 138px;" class="gantt_task_progress"><span>100% </span></div>
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
						<div task_id="1379339521972" class="gantt_task_line owner_4" style="left: 210px; top: 299px; height: 22px; line-height: 22px; width: 490px;">
							<div style="width: 366px;" class="gantt_task_progress"><span>75% </span></div>
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
						<div task_id="1379339521973" class="gantt_task_line owner_3" style="left: 630px; top: 326px; height: 22px; line-height: 22px; width: 280px;">
							<div style="width: 139px;" class="gantt_task_progress"><span>50% </span></div>
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
						<div task_id="1379339521974" class="gantt_task_line owner_1" style="left: 910px; top: 353px; height: 22px; line-height: 22px; width: 140px;">
							<div style="width: 0px;" class="gantt_task_progress"><span>0% </span></div>
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
		// this.querySelector('.flower-name').innerHTML = this.flower.editor.getPath();
	}

	/**
	 * Performs the actual FlowerGantt update.
	 */
	update() {
		const flower = this.flower;
	}
}

module.exports = FlowerView.Register('gantt', FlowerGantt);
