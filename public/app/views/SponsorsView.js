define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/sponsorsTemplate.html'
], function($, _, Backbone, sponsorsTemplate){


    var SponsorsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function initializeView (options) {
            var view = this;

            view.render();
        },

        render: function renderView (options) {
            var view = this;

            console.log(['render sponsors', options]);

            var compiledTemplate = _.template(sponsorsTemplate).call(this);
            view.$el.html(compiledTemplate);
        },

        destroy: function destroyView () {

        }

    });

    return SponsorsView;
});