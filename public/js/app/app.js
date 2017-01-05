var postsView = new PostListView({collection: animalsCollection});

$('#postView').append(postsView.render().el);