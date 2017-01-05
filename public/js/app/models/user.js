var User;
var Admin;
var SuperAdmin;

User = Backbone.Model.extend({
    defaults: {
        name: 'user'
    }
});

Admin = User.extend({
    defaults: {
        name: 'admin'
    }
});

