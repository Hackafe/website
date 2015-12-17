define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/newsletterFormTemplate.html'
], function($, _, Backbone, newsletterTemplate){
    "use strict";

    var form;

    var NewsletterFormView = Backbone.View.extend({

        el: '#newsletter-form-placeholder',
        template: null,
        events: {},

        initialize: function(options) {
            var view = this;
            view.prepareRender();

            window.eventDispacher.on('language:update', view.render, view);
        },

        //Due to lack of destroy method we will fix things before render
        prepareRender: function () {
            var view = this;

            view.$el = $('#newsletter-form-placeholder');

            form && form.off('submit');
            //this is a new form DOM
            form = $('#newsletter-form');

            view.render();
        },

        render: function() {
            var view = this;

            var compiledTemplate = _.template(newsletterTemplate).call(this);
            view.$el.html(compiledTemplate);

            form.on('submit', submitForm);
        }

    });

    function submitForm(e) {
        if(!validateForm()) { return false; }
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateForm() {
        var email = $('#email').val();
        if (validateEmail(email)) {
            return true;
        } else {
            alert('Please, enter a valid email address.');
            return false;
        }
    }

    return NewsletterFormView;
});