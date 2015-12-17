define([
  'underscore',
  'backbone'
], function(_, Backbone) {

    var EventModel = Backbone.Model.extend({

            //instance methods
            defaults: {
               id: null,
               facebook_id: null,
               about: "",
               can_post : false,
               kind: "",
               checkins :0,
               cover: null,
               picture: null,
               description : "",
               has_added_app : false,
               is_community_page : false,
               is_published : false,
               likes: 0,
               link : "",
               title : "Hackafe Plovdiv",
               talking_about_count : 0,
               username: "HackafePlovdiv",
               website : "hackafe.org",
               were_here_count:0,
               isCourse: false
            },

            idAttribute: 'id',

            initialize: function(options) {

            }

        },{
            //static methods
        }
    );

  return EventModel;

});