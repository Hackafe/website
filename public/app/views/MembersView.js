define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/membersTemplate.html'
], function($, _, Backbone, aboutTemplate){
    "use strict";

    var AboutView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function initializeView (options) {
            var view = this;
            view.render();
        },

        render: function renderView () {
            var view = this;

            var compiledTemplate = _.template(aboutTemplate).call(this);

            view.$el.html(compiledTemplate);
        },

        destroy: function destroyView () {

        }

    });

    return AboutView;
});