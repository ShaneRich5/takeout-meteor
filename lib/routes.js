FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/stores', {
	name: 'stores',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Stores'});
	}
});

FlowRouter.route('/items', {
	name: 'items',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Items'})
	}
})