"use 6to5";

module.exports = {
	// Configuration
	config: {
		FlowerDefinationPath: {
			type: 'string',
			'default': ''
		}
	},

	/**
	 * The composite disposable that stores the package's subscriptions.
	 */
	subscriptions: null,

	/**
	 * Returns the `Flower` object associated to the passed-in `TextEditor`.
	 */
	flowerForEditor(textEditor) {
		if (!textEditor) {
			return
		}
		if (!this.editorsFlowers) {
			return
		}

		let flower = this.editorsFlowers.get(textEditor)

		if (!flower) {
			if (!Flower) {
				Flower = require('./flower')
			}

			flower = new Flower({
				textEditor
			})
			this.editorsFlowers.set(textEditor, flower)

			var editorSubscription = textEditor.onDidDestroy(() => {
				let flowers = this.editorsFlowers
				if (flowers) {
					flowers.delete(textEditor)
				}
				editorSubscription.dispose()
			})
		}

		return flower
	}

	/**
	 * Activates the flower package.
	 */
	activate: function(state) {
		atom.config.observe('atom-flower', function(cfg) {
			console.info(cfg);
		});
		console.info(atom.config.get('atom-flower'));
		this.subscriptions = new CompositeDisposable();
		// this.subscriptions.add(atom.workspace.observeTextEditors((textEditor) => {
		// 	let flower = this.flowerForEditor(textEditor)
		// 	let flowerElement = atom.views.getView(flower)
		// 	flowerElement.attach()
		// }));
	},

	/**
	 * Deactivates the flower package.
	 */
	deactivate: function() {
		if (this.subscriptions) {
			this.subscriptions.dispose();
			this.subscriptions = null;
		}
	}
};
