/*global module:false*/
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON("package.json"),

    copy: {

      script: {
      src: "src/tmp/<%= pkg.name %>.build.<%= pkg.version %>.jsx",
        dest: "dist/<%= pkg.name %>.jsx",
      }

    },

    concat: {

      dist: {
        options: {
          stripBanners: true,
          banner: '\n/*! <%= pkg.name %>.jsx - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          nonull: true,
          separator: '\n',
        },

        src: [
        "src/Geo.js",
        "src/Utilities.js",
        "src/Projections.js",
        "src/AfterEffects.js"],
        dest: "src/tmp/<%= pkg.name %>.build.<%= pkg.version %>.jsx"
      },

      // dev: {
      //   options: {
      //     stripBanners: true,
      //     banner: '\n/*! <%= pkg.name %>.jsx - v<%= pkg.version %> - ' +
      //       '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
      //     nonull: true,
      //     separator: '\n',
      //   },
      //   src: ["src/aemap/License.js", "src/tmp/countries.geo.min.wrap.js", "src/test/onefeature.js", "src/min/json2.min.js", "src/proto/Prototypes.js", "src/aemap/Globals.js", "src/aemap/AEMAP.js", "src/aemap/Utilities.js", "src/aemap/Colors.js", "src/lib/extendscript.geo/Geo.js", "src/lib/extendscript.geo/Utilities.js", "src/lib/extendscript.geo/Projections.js", "src/aemap/UI.js", "src/tmp/<%= pkg.name %>.<%= pkg.version %>.jsx"],
      //   dest: "src/tmp/<%= pkg.name %>.countries.min.concat.<%= pkg.version %>.jsx",
      // },
    },

    // watch: {
    //   files: ['src/locations/locations.jsx', "src/lib/extendscript.geo/*.js"],
    //   tasks: ['copy:script', 'concat:dist', 'wrap:script']
    // }

  });
  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('grunt-js2coffee');
  //
  // grunt.loadNpmTasks('grunt-coffeelint');
  //   grunt.loadNpmTasks('grunt-contrib-coffee');
  //   grunt.loadNpmTasks('grunt-text-replace');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-extendscript');
  // Default task.
  //
  // // This is required if you use any options.
  grunt.task.run('notify_hooks');
  // grunt.registerTask('build-dev', ['copy:testreadfile', 'copy:geojson', 'copy:script', 'json-minify', 'uglify', 'wrap:json', 'concat', 'wrap:script']);

  // grunt.registerTask('build-dist', ['copy:script', 'concat:dist', 'wrap:script']);
  // Default task.
  grunt.registerTask('default', ['concat:dist','copy:script']);

  // grunt.registerTask('default', ['js2coffee']);


};