"use 6to5";

const FlowerView = require('./flower-view');

class FlowerGantt {
	/**
	 * Invoked when a new FlowerTree is created.
	 */
	onCreated() {
		this.innerHTML = `
			<div class="gantt_container">
				<div class="gantt_grid" style="height: 404px; width: 349px;">
					<div class="gantt_grid_scale" style="height: 29px; line-height: 28px; width: 349px;">
						<div class="gantt_grid_head_cell gantt_grid_head_text  " style="width:131px;" column_id="text">Task name</div>
						<div class="gantt_grid_head_cell gantt_grid_head_start_date  " style="width:95px;" column_id="start_date">Start time</div>
						<div class="gantt_grid_head_cell gantt_grid_head_duration  " style="width:80px;" column_id="duration">Duration</div>
						<div class="gantt_grid_head_cell gantt_grid_head_add gantt_last_cell " style="width:43px;" column_id="add"></div>
						<div class="gantt_grid_column_resize_wrap" style="top: 0px; height: 30px; left: 123.5px;" column_index="0">
							<div class="gantt_grid_column_resize"></div>
						</div>
						<div class="gantt_grid_column_resize_wrap" style="top: 0px; height: 30px; left: 218.5px;" column_index="1">
							<div class="gantt_grid_column_resize"></div>
						</div>
					</div>
					<div class="gantt_grid_data" style="height: 374px; width: 349px;" data-layer="true">
						<div class="gantt_row" style="height: 40px; line-height: 40px;" task_id="1">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_icon gantt_open"></div>
								<div class="gantt_tree_icon gantt_folder_closed"></div>
								<div class="gantt_tree_content">Office itinerancy</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-02</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">17</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row odd" style="height: 40px; line-height: 40px;" task_id="11">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_icon gantt_close"></div>
								<div class="gantt_tree_icon gantt_folder_open"></div>
								<div class="gantt_tree_content">Product launch</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-02</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">13</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row" style="height: 40px; line-height: 40px;" task_id="12">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Perform Initial testing</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-03</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">5</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row odd" style="height: 40px; line-height: 40px;" task_id="13">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_close"></div>
								<div class="gantt_tree_icon gantt_folder_open"></div>
								<div class="gantt_tree_content">Development</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-03</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">11</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row" style="height: 40px; line-height: 40px;" task_id="17">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Develop System</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-03</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">2</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row odd" style="height: 40px; line-height: 40px;" task_id="25">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Beta Release</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-06</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">0</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row" style="height: 40px; line-height: 40px;" task_id="18">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Integrate System</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-08</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">2</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row odd" style="height: 40px; line-height: 40px;" task_id="19">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Test</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-10</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">4</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row" style="height: 40px; line-height: 40px;" task_id="20">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Marketing</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-10</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">4</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row odd" style="height: 40px; line-height: 40px;" task_id="14">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Analysis</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-02</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">6</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row" style="height: 40px; line-height: 40px;" task_id="15">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_open"></div>
								<div class="gantt_tree_icon gantt_folder_closed"></div>
								<div class="gantt_tree_content">Design</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-03</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">5</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row odd" style="height: 40px; line-height: 40px;" task_id="16">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Documentation creation</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-02</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">7</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
						<div class="gantt_row" style="height: 40px; line-height: 40px;" task_id="24">
							<div class="gantt_cell" style="width:131px;">
								<div class="gantt_tree_indent"></div>
								<div class="gantt_tree_icon gantt_blank"></div>
								<div class="gantt_tree_icon gantt_file"></div>
								<div class="gantt_tree_content">Release v1.0</div>
							</div>
							<div class="gantt_cell" style="width:95px;text-align:center;">
								<div class="gantt_tree_content">2013-04-15</div>
							</div>
							<div class="gantt_cell" style="width:80px;text-align:center;">
								<div class="gantt_tree_content">0</div>
							</div>
							<div class="gantt_cell gantt_last_cell" style="width:43px;">
								<div class="gantt_add"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="gantt_task" style="height: 404px; width: 1178px;">
					<div class="gantt_task_scale" style="height: 29px; width: 1400px;">
						<div class="gantt_scale_line" style="height:29px;line-height:29px">
							<div class="gantt_scale_cell" style="width:70px;">01 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">02 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">03 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">04 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">05 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">06 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">07 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">08 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">09 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">10 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">11 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">12 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">13 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">14 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">15 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">16 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">17 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">18 Apr</div>
							<div class="gantt_scale_cell" style="width:70px;">19 Apr</div>
							<div class="gantt_scale_cell gantt_last_cell" style="width:70px;">20 Apr</div>
						</div>
					</div>
					<div class="gantt_data_area" style="height: 374px; width: 1400px;">
						<div class="gantt_task_bg" data-layer="true" style="width: 1400px;">
							<div class="gantt_task_row" style="height: 40px;" task_id="1">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row odd" style="height: 40px;" task_id="11">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row" style="height: 40px;" task_id="12">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row odd" style="height: 40px;" task_id="13">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row" style="height: 40px;" task_id="17">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row odd" style="height: 40px;" task_id="25">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row" style="height: 40px;" task_id="18">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row odd" style="height: 40px;" task_id="19">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row" style="height: 40px;" task_id="20">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row odd" style="height: 40px;" task_id="14">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row" style="height: 40px;" task_id="15">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row odd" style="height: 40px;" task_id="16">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
							<div class="gantt_task_row" style="height: 40px;" task_id="24">
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
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell"></div>
								<div style="width: 70px;" class="gantt_task_cell gantt_last_cell"></div>
							</div>
						</div>
						<div data-layer="true" style="width: 1400px;">
							<div class="baseline" style="left: 70px; width: 1190px; top: 29px;"></div>
							<div class="baseline" style="left: 140px; width: 910px; top: 69px;"></div>
							<div class="baseline" style="left: 280px; width: 350px; top: 109px;"></div>
							<div class="baseline" style="left: 70px; width: 770px; top: 149px;"></div>
							<div class="baseline" style="left: 140px; width: 140px; top: 189px;"></div>
							<div class="baseline" style="left: 490px; width: 140px; top: 269px;"></div>
							<div class="baseline" style="left: 630px; width: 280px; top: 309px;"></div>
							<div class="baseline" style="left: 630px; width: 280px; top: 349px;"></div>
							<div class="baseline" style="left: 140px; width: 350px; top: 429px;"></div>
							<div class="baseline" style="left: 70px; width: 490px; top: 469px;"></div>
						</div>
						<div class="gantt_links_area" data-layer="true" style="width: 1400px;">
							<div class="gantt_task_link" link_id="10">
								<div style="top: 50px; left: 48px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 50px; left: 48px; height: 60px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 42px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 90px; left: 48px; height: 20px; width: 90px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 72px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 90px; left: 118px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 97px; left: 134px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="11">
								<div style="top: 50px; left: 48px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 50px; left: 48px; height: 100px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 82px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 130px; left: 48px; height: 20px; width: 90px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 72px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 130px; left: 118px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 137px; left: 134px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="12">
								<div style="top: 50px; left: 48px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 50px; left: 48px; height: 20px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_up"></div>
								</div>
								<div style="top: 50px; left: 48px; height: 340px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 322px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 370px; left: 48px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 377px; left: 64px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="13">
								<div style="top: 50px; left: 48px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 50px; left: 48px; height: 380px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 362px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 410px; left: 48px; height: 20px; width: 90px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 72px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 410px; left: 118px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 417px; left: 134px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="14">
								<div style="top: 50px; left: 48px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 50px; left: 48px; height: 20px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_up"></div>
								</div>
								<div style="top: 50px; left: 48px; height: 420px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 402px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 450px; left: 48px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 457px; left: 64px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="15">
								<div style="top: 130px; left: 118px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 130px; left: 118px; height: 20px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_up"></div>
								</div>
								<div style="top: 130px; left: 118px; height: 60px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 42px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 170px; left: 118px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 177px; left: 134px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="16">
								<div style="top: 170px; left: 270px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 170px; left: 282px; height: 60px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 42px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 210px; left: 282px; height: 20px; width: 60.6863px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 42.6863px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 217px; left: 332.686px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="17">
								<div style="top: 250px; left: 620px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 250px; left: 632px; height: 40px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 22px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 270px; left: 608px; height: 20px; width: 44px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 26px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 270px; left: 608px; height: 40px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 22px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 290px; left: 608px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 297px; left: 624px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="18">
								<div style="top: 290px; left: 900px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 290px; left: 912px; height: 40px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 22px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 310px; left: 608px; height: 20px; width: 324px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 306px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_left"></div>
								</div>
								<div style="top: 310px; left: 608px; height: 40px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 22px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 330px; left: 608px; height: 20px; width: 26px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 8px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 337px; left: 624px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="22">
								<div style="top: 130px; left: 900px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 130px; left: 912px; height: 380px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 362px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 490px; left: 912px; height: 20px; width: 60.6863px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 42.6863px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 497px; left: 962.686px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
							<div class="gantt_task_link" link_id="23">
								<div style="top: 210px; left: 351.314px; height: 20px; width: 32px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 14px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 210px; left: 363.314px; height: 60px; width: 20px;" class="gantt_line_wrapper">
									<div style="height: 42px; width: 2px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_down"></div>
								</div>
								<div style="top: 250px; left: 363.314px; height: 20px; width: 130.686px;" class="gantt_line_wrapper">
									<div style="height: 2px; width: 112.686px; margin-top: 9px; margin-left: 9px;" class="gantt_link_line_right"></div>
								</div>
								<div style="top: 257px; left: 484px;" class="gantt_link_arrow gantt_link_arrow_right"></div>
							</div>
						</div>
						<div class="gantt_bars_area" data-layer="true" style="width: 1400px;">
							<div task_id="1" class="gantt_task_line has-baseline gantt_project gantt_dependent_task" style="left: 70px; top: 12px; height: 16px; line-height: 16px; width: 1190px;">
								<div style="width: 475px;" class="gantt_task_progress"></div>
								<div style="left: 475px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Office itinerancy</div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="11" class="gantt_task_line has-baseline gantt_project gantt_dependent_task" style="left: 70px; top: 52px; height: 16px; line-height: 16px; width: 910px;">
								<div style="width: 545px;" class="gantt_task_progress"></div>
								<div style="left: 545px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Product launch</div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="12" class="gantt_task_line has-baseline" style="left: 140px; top: 92px; height: 16px; line-height: 16px; width: 350px;">
								<div style="width: 348px;" class="gantt_task_progress"></div>
								<div style="left: 348px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Perform Initial testing</div>
								<div class="gantt_task_drag task_right"></div>
								<div class="gantt_task_drag task_left"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="13" class="gantt_task_line has-baseline overdue gantt_project gantt_dependent_task" style="left: 140px; top: 132px; height: 16px; line-height: 16px; width: 770px;">
								<div style="width: 384px;" class="gantt_task_progress"></div>
								<div style="left: 384px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Development</div>
								<div class="gantt_side_content gantt_right gantt_link_crossing"><b>Overdue: 1 days</b></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="17" class="gantt_task_line has-baseline" style="left: 140px; top: 172px; height: 16px; line-height: 16px; width: 140px;">
								<div style="width: 138px;" class="gantt_task_progress"></div>
								<div style="left: 138px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Develop System</div>
								<div class="gantt_task_drag task_right"></div>
								<div class="gantt_task_drag task_left"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="25" class="gantt_task_line gantt_milestone" style="left: 342px; top: 213px; height: 16px; line-height: 16px; width: 16px;">
								<div class="gantt_task_content"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="18" class="gantt_task_line has-baseline" style="left: 490px; top: 252px; height: 16px; line-height: 16px; width: 140px;">
								<div style="width: 110px;" class="gantt_task_progress"></div>
								<div style="left: 110px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Integrate System</div>
								<div class="gantt_task_drag task_right"></div>
								<div class="gantt_task_drag task_left"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="19" class="gantt_task_line has-baseline" style="left: 630px; top: 292px; height: 16px; line-height: 16px; width: 280px;">
								<div style="width: 56px;" class="gantt_task_progress"></div>
								<div style="left: 56px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Test</div>
								<div class="gantt_task_drag task_right"></div>
								<div class="gantt_task_drag task_left"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="20" class="gantt_task_line has-baseline" style="left: 630px; top: 332px; height: 16px; line-height: 16px; width: 280px;">
								<div style="width: 0px;" class="gantt_task_progress"></div>
								<div style="left: 0px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Marketing</div>
								<div class="gantt_task_drag task_right"></div>
								<div class="gantt_task_drag task_left"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="14" class="gantt_task_line" style="left: 70px; top: 372px; height: 16px; line-height: 16px; width: 420px;">
								<div style="width: 334px;" class="gantt_task_progress"></div>
								<div style="left: 334px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Analysis</div>
								<div class="gantt_task_drag task_right"></div>
								<div class="gantt_task_drag task_left"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="15" class="gantt_task_line has-baseline gantt_project gantt_dependent_task" style="left: 140px; top: 412px; height: 16px; line-height: 16px; width: 350px;">
								<div style="width: 70px;" class="gantt_task_progress"></div>
								<div style="left: 70px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Design</div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="16" class="gantt_task_line has-baseline" style="left: 70px; top: 452px; height: 16px; line-height: 16px; width: 490px;">
								<div style="width: 0px;" class="gantt_task_progress"></div>
								<div style="left: 0px;" class="gantt_task_progress_drag"></div>
								<div class="gantt_task_content">Documentation creation</div>
								<div class="gantt_task_drag task_right"></div>
								<div class="gantt_task_drag task_left"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
							<div task_id="24" class="gantt_task_line gantt_milestone" style="left: 972px; top: 493px; height: 16px; line-height: 16px; width: 16px;">
								<div class="gantt_task_content"></div>
								<div class="gantt_link_control task_right" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
								<div class="gantt_link_control task_left" style="height: 16px; line-height: 16px;">
									<div class="gantt_link_point"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="gantt_ver_scroll" style="display: block; height: 376px; width: 18px; top: 30px;">
					<div style="height: 550px;"></div>
				</div>
				<div class="gantt_hor_scroll" style="display: block; width: 1512px; height: 18px;">
					<div style="width: 1752px;"></div>
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
	 * Performs the actual FlowerGantt update.
	 */
	update() {
		const flower = this.flower;
	}
}

module.exports = FlowerView.Register('gantt', FlowerGantt);
