<template>
    <div v-if="events.length" class="event-list" v-bind:class="name">
        <h2>{{ title }}</h2>
        <hr>
        <div class="row events">
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="event in events">
                <hf-event v-bind:event="event"></hf-event>
            </div>
        </div>
    </div>
</template>

<script>
    var Event = require('./Event.vue');
    export default {
        name: "event-list",
        props: {
            name: String,
            title: String,
            events: {
                type: Array,
                required: true
            }
        },
        components: {
            'hf-event': Event
        }
    }
</script>

<style>
</style>
