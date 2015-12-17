define([
  'underscore',
  'backbone',
  'models/EventModel'
], function(_, Backbone, EventModel) {

    var EventsCollection = Backbone.Collection.extend({
        model: EventModel,
        url: 'api/events.php?',

        initialize : function(models, options) {
            var collection = this;
            collection.deferred = $.Deferred();

            $.get(collection.url, function(rawData) {

                rawData = JSON.parse(rawData);
                // console.log(rawData);
                collection.parseRawData(rawData);
//                var nextEventsUrlParam = 1,
//                previousEventsUrlParam = 0;
                window.eventDispacher.trigger('events:update:paging', {
                    nextEventsUrlParam: 1,
                    previousEventsUrlParam: 0
                });
                collection.deferred.resolve();
            });

        },

        loadNewModels : function(urlParam) {
            var collection = this;

            collection.reset();

            $.get(collection.url + '%26' + urlParam, function(rawData) {

                console.log(['new rawData', rawData])

                rawData = JSON.parse(rawData);

                collection.parseRawData(rawData);
                window.eventDispacher.trigger('events:render');
            });
        },

        parseRawData: function(rawData) {
            var collection = this;

            _.each(rawData.data, function(eventModel) {


                    var start = eventModel.start_time.split('T');
                    start = parseInt(start[0].split('-').join(''));

                    var end = eventModel.end_time.split('T');
                    end = parseInt(end[0].split('-').join(''));

                    if(eventModel.kind == 'course') {
                        eventModel.isCourse = true;
                    }

                

                collection.push(eventModel);
            });

        }

    });

  return EventsCollection;

});