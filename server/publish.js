 Meteor.publish('stores', function(){
 	return Stores.find({});
 });

Meteor.publish('store', function(id){
	check(id, String);
	return Stores.find({_id: id});
})

Meteor.publish('author.posts', function(id){
	check(id, String);
	return Posts.find({_id: id});
});

Meteor.publish('author.post', function(){
	return Posts.find({author: this.userId});
});

 Meteor.publish('items', function(){
 	return Items.find({author: this.userId});
 });

 // Meteor.publish('recipes', function() {
 // 	return Recipes.find({author: this.userId});
 // });