define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/whoisinthelabTamplate.html',
  'models/UsersCollection'
], function($, _, Backbone, whoisinthelabTemplate, UsersCollection){
    "use strict";

    var WhoisinthelabView = Backbone.View.extend({

        el: '#who-is-in-the-lab-placeholder',
        template: null,
        events: {},
        collections: {},

        initialize: function(options) {
            var view = this;

            view.collections.usersCollection = new UsersCollection();

            window.eventDispacher.on('users:updated', view.render, view);
        },

        render: function() {
            var view = this;

            view.unbindEvents();

            view.$el = $('#who-is-in-the-lab-placeholder');
            view.el = view.$el[0];

            var compiledTemplate = _.template(whoisinthelabTemplate).call(this);

            view.$el.html(compiledTemplate);

            view.bindEvents();
        },

        bindEvents: function() {
            var view = this;
            
            view.$elShowUsers = view.$el.find('.js-show-users');
            view.$elUsersModal = view.$el.find('.js-users-modal');
            view.$elCloseModal = view.$elUsersModal.find('.js-hide-users');

            view.$elShowUsers.on('click', function(){
                view.$elUsersModal.fadeIn();
            });

            view.$elCloseModal.on('click', function() {
                view.$elUsersModal.fadeOut();
            });
            
        },

        unbindEvents: function() {
            var view = this;

            view.$elShowUsers && view.$elShowUsers.off('click');
            view.$elShowUsers && view.$elCloseModal.off('click');
        }

    });

    return WhoisinthelabView;
});