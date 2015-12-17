// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {

    require(['app', 'plugins'], function(App){
        // The "app" dependency is passed in as "App"
        // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
        App.initialize();
    });

});