/**
 * Created by groupsky on 09.10.16.
 */

var Vue = require('vue');
var Events = require('./components/Events.vue');

new Vue({
    el: 'hf-events',
    render: function(h){
        return h(Events);
    }
});
