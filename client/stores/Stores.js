// Meteor.subscribe('stores');

Template.Stores.onCreated(function() {
	var self = this;
	self.autorun(function() {	
		self.subscribe('stores');
	});
});

Template.Stores.helpers({
	stores: () => {
		return Stores.find({});
	}
});