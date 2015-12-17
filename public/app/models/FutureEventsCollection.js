define([
  'underscore',
  'backbone',
  'models/FutureEventModel'
], function(_, Backbone, FutureEventModel) {

    var FutureEventsCollection = Backbone.Collection.extend({
        model: FutureEventModel,
        url: 'api/static_future_events.json',

        initialize : function(models, options) {
            var collection = this;
            collection.deferred = $.Deferred();

            collection.fetch({
                success: function() {
                    collection.deferred.resolve();
                }
            });

        }

    });

    return FutureEventsCollection;

});