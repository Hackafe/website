define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contactsTemplate.html?v=1'
], function($, _, Backbone, contactsTemplate){
    "use strict";

    var ContactsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function initializeView (options) {
            var view = this;
            view.render();
        },

        render: function renderView () {
            var view = this;

            var compiledTemplate = _.template(contactsTemplate).call(this);

            view.$el.html(compiledTemplate);
        },

        destroy: function destroyView () {

        }

    });

    return ContactsView;
});
