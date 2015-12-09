Items = new Meteor.Collection('items');

ItemSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
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
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		}
	}
});

Items.attachSchema( ItemSchema );