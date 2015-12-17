define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projectsTemplate.html'
], function($, _, Backbone, projectsTemplate){


    var ProjectsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function initializeView (options) {
            var view = this;

            view.render();
        },

        render: function renderView (options) {
            var view = this;

            console.log(['render Projects', options]);

            var compiledTemplate = _.template(projectsTemplate).call(this);
            view.$el.html(compiledTemplate);
        },

        destroy: function destroyView () {

        }

    });

    return ProjectsView;
});