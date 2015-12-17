define([
  'jquery',
  'underscore',
  'backbone',
  'views/NewsletterFormView',
  'text!templates/footerTemplate.html'
], function($, _, Backbone, NewsletterFormView, footerTemplate){
    "use strict";

    var FooterView = Backbone.View.extend({

        el: '#footer-placeholder',
        template: null,
        events: {},

        widgets: {},

        initialize: function initializeView (options) {
            var view = this;

            view.render();

            window.eventDispacher.on('language:update', view.render, view);
        },

        render: function renderView () {
            var view = this;

            var compiledTemplate = _.template(footerTemplate).call(this);
            view.$el.html(compiledTemplate);

            //update newsletterFormView
            if(view.widgets.newsletterFormView) {
                view.widgets.newsletterFormView.prepareRender();
            }else {
                view.widgets.newsletterFormView = new NewsletterFormView();
            }
        },

        destroy: function destroyView () {

        }

    });

    return FooterView;
});