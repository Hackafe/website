/**
 * Model - Hackafe user
 **/
define([
  'underscore',
  'backbone'
], function(_, Backbone) {

    var UserModel = Backbone.Model.extend({

            //instance methods
            defaults: {

                name1: 'Guest',
                name2: null,
                twitter: null,
                googlePlus: null,
                facebook: null,
                tel: null,
                email: null
            },

            initialize: function(options) {

            }

        },{
            //static methods
        }
    );

  return UserModel;

});