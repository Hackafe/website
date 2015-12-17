define([
  'underscore',
  'backbone',
  'models/UserModel'
], function(_, Backbone, UserModel) {

    var UsersCollection = Backbone.Collection.extend({
        model: UserModel,

        initialize : function(models, options) {
            console.log('init users');
            this.parseModels();
        },

        parseModels: function() {
            var collection = this;

            var usersList = [];
            //this will be replaced with JSONP call
            $.get('api/get_users.php', function(data) {


                _.each(data.data.users, function(user, index) {
                    usersList.push(user);
                });

                collection.guests = data.data.guests;
                collection.reset(usersList);

                window.eventDispacher.trigger('users:updated');

            }, 'json');

        }


    });

  return UsersCollection;

});