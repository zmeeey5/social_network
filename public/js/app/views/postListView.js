var PostListView;

PostListView = Backbone.View.extend({
    tagName: 'ul',
    
    className: 'post-list',
    
    render: function () {
        this.collection.each(this.addPost, this);
        return this;
    },

    addPost: function (postModelItem) {
        var postListView = new PostItemView({ model : postModelItem});
        this.$el.append(postListView.render().el);
    }
});

