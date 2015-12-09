Stores = new Meteor.Collection('stores');

StoreSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	shortName: {
		type: String,
		label: "Short Name"
	},
	slogan: {
		type: String,
		label: "Slogan"
	},
	description: {
		type: String,
		label: "Description"
	},
	// should make this a contact schema
	email: {
		type: String,
		label: "Email"
	},
	number: {
		type: String,
		label: "Number"
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		}
	}
});

Stores.attachSchema( StoreSchema );