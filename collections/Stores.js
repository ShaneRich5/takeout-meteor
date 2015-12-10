Stores = new Mongo.Collection('stores');

Stores.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Branch = new SimpleSchema({
	street: {
		type: String,
		label: "Street"
	},
	city: {
		type: String,
		label: "City"
	},
	country: {
		type: String,
		label: "Country",
		autoValue: function() {
			return "Jamaica";
		},
		autoform: {
			type: "hidden"
		}
	},
	latitude: {
		type: Number,
		label: "Latitude"
	},
	longitude: {
		type: Number,
		label: "Longitude"
	},
	numbers: {
		type: String
	}
});

StoreSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	shortName: {
		type: String,
		label: "Short Name",
		optional: true
	},
	slogan: {
		type: String,
		label: "Slogan"
	},
	description: {
		type: String,
		label: "Description"
	},
	email: {
		type: String,
		label: "Email"
	},
	number: {
		type: String,
		label: "Head Office Number",
		optional: true
	},
	branches: {
		type: [Branch]
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Stores.attachSchema( StoreSchema );