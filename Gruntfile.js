
/**
 * Grunt tasks for extendscript.geo lib
 */
/*global module:false*/

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON("package.json"),

    copy: {
      all: {
      src: "src/tmp/<%= pkg.name %>.build.<%= pkg.version %>.jsx",
        dest: "dist/<%= pkg.name %>.jsx",
      },
            ae: {
      src: "src/tmp/<%= pkg.name %>.AE.build.<%= pkg.version %>.jsx",
        dest: "dist/<%= pkg.name %>.ae.jsx",
      },
            id: {
      src: "src/tmp/<%= pkg.name %>.ID.build.<%= pkg.version %>.jsx",
        dest: "dist/<%= pkg.name %>.id.jsx",
      }

    },

    concat: {
        options: {
          stripBanners: true,
          banner: '\n/*! <%= pkg.name %>.jsx - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          nonull: true,
          separator: '\n',
        },
 id: {

        src: [
        "src/Geo.js",
        "src/Utilities.js",
        "src/Projections.js",
        "src/InDesign.js"],
        dest: "src/tmp/<%= pkg.name %>.ID.build.<%= pkg.version %>.jsx"
      },
      ae: {
        src: [
        "src/Geo.js",
        "src/Utilities.js",
        "src/Projections.js",
        "src/AfterEffects.js"],
        dest: "src/tmp/<%= pkg.name %>.AE.build.<%= pkg.version %>.jsx"
      },
      all: {
        src: [
        "src/Geo.js",
        "src/Utilities.js",
        "src/Projections.js",
        "src/AfterEffects.js",
        "src/InDesign.js"],
        dest: "src/tmp/<%= pkg.name %>.build.<%= pkg.version %>.jsx"
      },

    },
    watch: {
      files: ['src/*.js', "src/*.jsx"],
      tasks: ['concat:all','copy:all','concat:ae','copy:ae','concat:id','copy:id']
    }

  });

  //
  // // This is required if you use any options.
  grunt.task.run('notify_hooks');
  grunt.registerTask('build-id', ['concat:id','copy:id']);

  grunt.registerTask('build-ae', ['concat:ae','copy:ae']);
  grunt.registerTask('build-all',['concat:all','copy:all','concat:ae','copy:ae','concat:id','copy:id']);

  grunt.registerTask('default', ['watch'] );

};