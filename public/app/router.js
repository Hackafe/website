// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'I18n',
  'translations-bg',
  'translations-en',
  'views/HeaderView',
  'views/FooterView',
  'views/IndexView',
  'views/EventsView',
  'views/ProjectsView',
  'views/MembersView',
  'views/SponsorsView',
  'views/ContactsView',
  'views/AnnouncementsView',
  'models/EventsCollection',
  'models/ProjectsCollection',
  'models/SponsorsCollection',
  'models/FutureEventsCollection'
  ],
  function($, _, Backbone, I18n, translationsBG, translationsEN, HeaderView, FooterView, IndexView, EventsView, ProjectsView, MembersView, SponsorsView, ContactsView, AnnouncementsView, EventsCollection, ProjectsCollection, SponsorsCollection, FutureEventsCollection) {
    // "use strict";

    var AppRouter = Backbone.Router.extend({
        root: "/#!/",
        routes: {
            '': 'index',
            '!/': 'index',
            '!/events/:eventId': 'events',
            '!/events': 'events',
            '!/projects/:projectId': 'projects',
            '!/projects': 'projects',
            '!/announcements': 'announcements',
            '!/sponsors': 'sponsors',
            '!/members': 'members',
            '!/contacts': 'contacts'
        },

        views: {},
        models: {},
        collections: {},

        currentView: 'index',

        /**
         * Initialize application
         * returns router instance
         **/
        initialize: function() {

            var router = this;

            //used for debug
            router.on('all', function (eventName) {
                console.log('initialize:', eventName, Backbone.history.fragment);
            });

            router.on('route', function (route) {

                router.views.headerView.render();
            });


            //bind language update
            window.eventDispacher.on('language:update', function () {
                router.views[router.currentView + 'View'].render.call(router.views[router.currentView + 'View']);
            });

            //static views
            router.views.footerView = new FooterView();
            router.views.headerView = new HeaderView();

            return router;
        },

        index: function() {
            var router = this;

            console.log('index success');

            router.currentView = 'index';

            //updatePage content
            if(router.views.indexView) {
                router.views.indexView.render();
            }else {
                router.views.indexView = new IndexView();
            }

            return this;
        },

       members: function() {
            var router = this;

            router.currentView = 'members';

            //updatePage content
            if(router.views.membersView) {
                router.views.membersView.render();
            }else {

                router.views.membersView = new MembersView();
            }
        },

        events: function(eventId) {
            var router = this;

            router.currentView = 'events';

            //updatePage content
            if(router.views.eventView) {

                router.views.eventView.render({
                    eventId: eventId
                });

            }else {

                router.views.eventView = new EventsView({
                    eventsCollection: null,
                    eventId: eventId || null
                });
            }

        },

        announcements: function() {
            var router = this;

            router.currentView = 'announcements';

            //updatePage content
            if(router.views.announcementsView) {

                router.views.announcementsView.render();

            }else {

                router.views.announcementsView = new AnnouncementsView();
            }

        },

        sponsors: function() {
            var router = this;

            router.currentView = 'sponsors';

            //updatePage content
            if(router.views.sponsorsView) {

                router.views.sponsorsView.render();

            }else {

                router.views.sponsorsView = new SponsorsView();
            }

        },

        contacts: function() {
            var router = this;

            router.currentView = 'contacts';

            //updatePage content
            if(router.views.contactsView) {
                router.views.contactsView.render();
            }else {

                router.views.contactsView = new ContactsView();
            }

        },

        projects: function() {
            var router = this;

            router.currentView = 'projects';

            //updatePage content
            if(router.views.projectsView) {
                router.views.projectsView.render();
            }else {

                router.views.projectsView = new ProjectsView();
            }
        }

    });

    var initialize = function() {

        I18n.defaultLocale = "BG";
        I18n.locale = window.localStorage.locale || "BG";

        var app_router = new AppRouter();
        app_router.trigger('router:ready');

        Backbone.history.start({pushState: false, root: app_router.root });

    };

    return {
        initialize: initialize
    };

});