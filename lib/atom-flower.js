"use 6to5";

module.exports = {
	// Configuration
	config: {
		FlowerUnitsPath: {
			type: 'string',
			'default': ''
		}
	},

	/**
	 * This is the primary required function for an exported module.
	 */
	activate: function(state) {
		atom.config.observe('atom-flower', function(cfg) {
			console.info(cfg);
		});
		console.info(atom.config.get('atom-flower'));
	}
};
