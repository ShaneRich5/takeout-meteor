Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function(userId, doc){
		return !!userId;
	}
});

Comment = new SimpleSchema({
	body: {
		type: String,
		label: "Share your thoughts"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	}
});

Tag = new SimpleSchema({
	name: {
		type: String,
		label: "Make your post easier to find"
	}
})

PostSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
	body: {
		type: String,
		label: "Body" 
	},
	comments: {
		type: [Comment]
	},
	tags: {
		type: [Tag]
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	}
});

Posts.attachSchema( PostSchema );