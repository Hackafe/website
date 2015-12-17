define([
  'underscore',
  'backbone',
  'models/ProjectModel'
], function(_, Backbone, ProjectModel) {

    var ProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel,

        initialize : function(models, options) {},

        // url : 'api/projects.json',

    });

  return ProjectsCollection;

});