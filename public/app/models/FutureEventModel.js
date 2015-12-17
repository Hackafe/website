define([
  'underscore',
  'backbone'
], function(_, Backbone) {

    var FutureEventModel = Backbone.Model.extend({

            //instance methods
            defaults: {
               id: null,
               title: "",
               presenter : "",
               description: "",
               image : ""
            },

            idAttribute: 'id',

            initialize: function(options) {

            }

        },{
            //static methods
        }
    );

  return FutureEventModel;

});