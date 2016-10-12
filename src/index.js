/**
 * Created by groupsky on 09.10.16.
 */

var Vue = require('vue');
var Events = require('./components/Events.vue');

new Vue({
    el: '.app',
    components: {
        'hf-events': Events,
    },
});
