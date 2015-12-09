 Meteor.publish('stores', function(){
 	return Stores.find({})
 });

 Meteor.publish('items', function(){
 	return Items.find({author: this.userId})
 });

 // Meteor.publish('recipes', function() {
 // 	return Recipes.find({author: this.userId});
 // });