<template>
    <div v-bind:title="event.desc"
         class="thumbnail event">
        <img v-bind:src="coverImgUrl">

        <div class="caption">
            <h3>{{ event.name }}</h3>
            <h5>{{ dueDate }}</h5>

            <p>
                <a v-if="facebookUrl" v-bind:href="facebookUrl"
                   target="_blank" class="btn btn-primary"
                   role="button">FB</a>
                <a v-if="forumUrl" v-bind:href="forumUrl"
                   target="_blank" class="btn btn-default"
                   role="button">FRM</a>
            </p>
        </div>
    </div>
</template>

<script>
    var Vue = require('vue');
    Vue.use(require('vue-resource'));
    var moment = require('moment');
    export default {
        name: "event",
        props: {
            event: {
                type: Object,
                required: true
            }
        },
        data: function () {
            return {
                coverImgUrl: ""
            };
        },
        computed: {
            dueDate: function() {
                return moment(this.event.due).format("ddd, DD MMM, HH:mm");
            },
            facebookUrl: function() {
                var match = this.event.desc &&
                    this.event.desc.match(/((https?:)?\/\/(www.)?facebook\.com\/events\/\d+)/i);
                return match && match[0];
            },
            forumUrl: function() {
                var match = this.event.desc &&
                    this.event.desc.match(/((https?:)?\/\/frm\.hackafe\.org\/t\/[-a-zA-Z0-9]+\/\d+)/i);
                return match && match[0]
            }
        },
        methods: {
            fetchCover: function(coverId) {
                this.coverImgUrl = false;
                if (!coverId) return;
                var self = this;
                return this.$http.jsonp('http://api.trello.com/1/cards/'+this.event.id+'/attachments/'+coverId, {
                    params: {
                        key: '545c3e7e39e96a7544eae99bca688619',
                    },
                }).then(function response(response) {
                    return self.coverImgUrl = response.data.url;
                });
            }
        },
        beforeMount: function beforeMount() {
            this.$watch('event.idAttachmentCover', this.fetchCover, {immediate: true});
        },
    }
</script>

<style>

</style>
