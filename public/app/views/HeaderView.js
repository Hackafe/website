define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/headerTemplate.html',
  'views/WhoIsInTheLabView'
], function($, _, Backbone, headerTemplate, WhoIsInTheLabView){
    "use strict";

    var HeaderView = Backbone.View.extend({

        el: '#header-placeholder',
        template: null,
        events: {},

        initialize: function(options) {
            var view = this;

            window.eventDispacher.on('language:update', view.render, view);

            view.whoIsInTheLab = new WhoIsInTheLabView();
        },

        render: function() {
            var view = this,
                compiledTemplate = _.template(headerTemplate).call(this);

            if(view.languageSelectors) {
                view.unbind();
            }

            view.$el.html(compiledTemplate);

            view.whoIsInTheLab.render();

            view.languageSelectors = view.$el.find('#js-change-language a');

            this.bind();
        },

        bind: function() {
            var view = this;

            view.languageSelectors.on('click', function() {
                var locale = $(this).data('locale');

                if(I18n.locale !== locale) {

                    I18n.locale = locale;
                    window.localStorage.locale = locale;

                    window.eventDispacher.trigger('language:update');
                }

            });

        },

        unbind: function() {
            var view = this;

            view.languageSelectors.off('click');
        }

    });

    return HeaderView;
});