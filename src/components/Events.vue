<template>
    <div class="container-fluid events">
        <event-list v-bind:events="todayEvents" title="Днес" name="today"></event-list>
        <event-list v-bind:events="tomorrowEvents" title="Утре" name="tomorrow"></event-list>
        <event-list v-bind:events="thisWeekEvents" title="Тази седмица" name="this-week"></event-list>
        <event-list v-bind:events="nextWeekEvents" title="Следващата седмица" name="next-week"></event-list>
        <event-list v-bind:events="thisMonthEvents" title="Този месец" name="this-month"></event-list>
        <event-list v-bind:events="nextMonthEvents" title="Следващия месец" name="next-month"></event-list>
        <event-list v-bind:events="futureEvents" title="Следва" name="future"></event-list>
    </div>
</template>

<script>
    var Vue = require('vue');
    Vue.use(require('vue-resource'));
    var EventList = require('./EventList.vue');
    var moment = require('moment');

    export default {
        name: 'hf-events',
        data: function () {
            return {
                events: [],
            };
        },
        components: {
            'event-list': EventList
        },
        methods: {
            fetchEvents: function fetchEvents() {
                var self = this;
                return this.$http.jsonp('http://api.trello.com/1/boards/GHda069L/cards/visible', {
                    params: {
                        key: '545c3e7e39e96a7544eae99bca688619',
                    },
                }).then(function response(response) {
                    var currentTime = new Date().getTime();
                    return self.events = response.data
                        // only events with future date are interesting
                        .filter(function filter(card) {
                            return card.due && new Date(card.due).getTime() >= currentTime;
                        })
                        // sort from sooner to latest
                        .sort(function sort(a, b) {
                            return new Date(a.due).getTime() - new Date(b.due).getTime();
                        });
                });
            },
            filterEvents: function filterEvents(fromTime, toTime) {
                return this.events.filter(function (event) {
                    var eventTime = new Date(event.due).getTime();
                    return fromTime <= eventTime && eventTime <= toTime;
                });
            },
        },
        computed: {
            todayEvents: function () {
                var fromTime = moment().startOf('day').valueOf();
                var toTime = moment().endOf('day').valueOf();
                return this.filterEvents(fromTime, toTime);
            },
            tomorrowEvents: function () {
                var fromTime = moment().add(1, 'day').startOf('day').valueOf();
                var toTime = moment().add(1, 'day').endOf('day').valueOf();
                return this.filterEvents(fromTime, toTime);
            },
            thisWeekEvents: function () {
                var fromTime = moment().add(2, 'days').startOf('day').valueOf();
                var toTime = moment().endOf('week').valueOf();
                return this.filterEvents(fromTime, toTime);
            },
            nextWeekEvents: function () {
                var fromTime = moment().add(1, 'week').startOf('week').valueOf();
                var toTime = moment().add(1, 'week').endOf('week').valueOf();
                return this.filterEvents(fromTime, toTime);
            },
            thisMonthEvents: function () {
                var fromTime = moment().add(2, 'weeks').startOf('week').valueOf();
                var toTime = moment().endOf('month').valueOf();
                return this.filterEvents(fromTime, toTime);
            },
            nextMonthEvents: function () {
                var fromTime = moment().add(1, 'month').startOf('month').valueOf();
                var toTime = moment().add(1, 'month').endOf('month').valueOf();
                return this.filterEvents(fromTime, toTime);
            },
            futureEvents: function () {
                var fromTime = moment().add(2, 'months').startOf('month').valueOf();
                var toTime = moment().add(6, 'months').valueOf();
                return this.filterEvents(fromTime, toTime);
            },
        },
        beforeMount: function beforeMount() {
            this.fetchEvents();
        },
    };
</script>
