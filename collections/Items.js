Items = new Meteor.Collection('items');

ItemSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	price: {
		type: Number,
		label: "Price",
		min: 0
	},
	description: {
		type: String,
		label: "Description"
	},
	store: {
		type: String,
		label: "Store",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Items.attachSchema( ItemSchema );