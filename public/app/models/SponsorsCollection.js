define([
  'underscore',
  'backbone',
  'models/SponsorModel'
], function(_, Backbone, SponsorModel) {

    var SponsorsCollection = Backbone.Collection.extend({
        model: SponsorModel,

        initialize : function(models, options) {},

        // url : 'api/events.json',

    });

  return SponsorsCollection;

});