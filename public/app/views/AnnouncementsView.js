define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/announcementsTemplate.html'
], function($, _, Backbone, announcementsTemplate){


    var AnnouncementsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function initializeView (options) {
            var view = this;

            view.render();
        },

        render: function renderView (options) {
            var view = this;

            console.log(['render announcements', options]);

            var compiledTemplate = _.template(announcementsTemplate).call(this);
            view.$el.html(compiledTemplate);
        },

        destroy: function destroyView () {

        }

    });

    return AnnouncementsView;
});