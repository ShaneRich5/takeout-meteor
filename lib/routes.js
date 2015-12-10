FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/stores', {
	name: 'stores',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Stores'});
	}
});

FlowRouter.route('/stores/:id', {
	name: 'store',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Store'})
	}
});

FlowRouter.route('/items', {
	name: 'items',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Items'})
	}
});