define([
  'jquery',
  'underscore',
  'backbone',
  'router',
], function($, _, Backbone, Router){
    "use strict";

    var initialize = function(){

        window.eventDispacher = {};

        _.extend(window.eventDispacher, Backbone.Events);

        // Pass in our Router module and call it's initialize function
        var router =  Router.initialize();
    };

    return {
        initialize: initialize
    };
});