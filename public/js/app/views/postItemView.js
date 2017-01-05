var PostItemView;

PostItemView = Backbone.View.extend({
    tagName: 'li',

    className: 'post-item z-depth-2',

    events: {
        'click .editPost': 'editPost',
        'click .deletePost': 'deletePost',
        'click .savePost': 'savePost',
        'click .showMore': 'showMore'
    },

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },

    template: _.template( $('#postTemplate').html() ),

    editPost: function () {
        this.$('.post-title').attr('contenteditable', 'true').addClass('is-editable');
        this.$('.post-description').attr('contenteditable', 'true').addClass('is-editable');
        this.$('.savePost').removeClass('hide');
        this.$('.editPost').addClass('hide');
        this.showMore();
    },

    deletePost: function () {
        this.undelegateEvents();
        this.$el.removeData().unbind();
        this.remove();
    },

    savePost : function () {
        var newValue = this.$('.post-description').html();
        this.model.set('description', newValue);
    },

    showMore: function () {
        this.$el.closest('.show-more').removeClass('show-more');
    },

    render: function () {
        var newPostItem = this.template(this.model.toJSON());
        this.$el.html(newPostItem);

        var descriptionLength = this.model.get('description').length;
        if (descriptionLength >= 300) {
            this.$el.addClass('show-more');
        }
        return this;
    }
});