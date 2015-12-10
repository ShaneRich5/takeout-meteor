Items = new Mongo.Collection('items');

Items.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

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
	author: {
		type: String,
		label: "Author",
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