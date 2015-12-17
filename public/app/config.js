// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  paths: {

    // Make templates easier to access.

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "scripts/vendor/lodash.underscore",

    // Map remaining vendor dependencies.
    "jquery": "scripts/vendor/jquery",
    "backbone": "scripts/vendor/backbone",
    "modernizr": "scripts/vendor/modernizr",
    "I18n": "scripts/vendor/i18n",
    "translations-bg": "translations/translations-bg",
    "translations-en": "translations/translations-en",
    "UI": "../../ui",
    "plugins": "scripts/vendor/plugins"
  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {

      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],
      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },

    "UI": {

      deps:  ["jquery", "underscore", "I18n"],
      exports: "UI"
    },

    "translations": {

      deps:  ["I18n"],
      exports: "translations"
    }

  }
});
