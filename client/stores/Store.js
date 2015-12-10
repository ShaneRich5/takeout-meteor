Template.Store.onCreated(function() {
	var self = this;
	self.autorun(function() {	
		var id = FlowRouter.getParam('id');
		self.subscribe('store', id);
	});
});

Template.Store.helpers({
	store: () => {
		var id = FlowRouter.getParam('id');
		return Stores.findOne({_id: id});
	}
});