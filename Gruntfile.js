module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      css: {
        files: [
          {'css/style-min.css': ['css/style.css']},
          {'css/print-min.css': ['css/print.css']},
          {'views/css/style-min.css': ['views/css/style.css']},
          {'views/css/bootstrap-grid-min.css': ['views/css/bootstrap-grid.css']},
        ],
      },
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index-min.html': 'index.html',
          'project-2048-min.html': 'project-2048.html',
          'project-mobile-min.html': 'project-mobile.html',
          'project-webperf-min.html': 'project-webperf.html',
          'views/pizza-min.html': 'views/pizza.html'
        },
      },
    },

    uglify: {
      static_mappings: {
        files: [
          {src: 'js/perfmatters.js', dest: 'js/perfmatters.min.js'},
          {src: 'views/js/main.js', dest: 'views/js/main-min.js'},
        ],
      },
    },

    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'views/images/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'views/images/compressed/',
            ext: '.png'
          },
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'img/compressed/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'views/images/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'views/images/compressed/',
            ext: '.jpg'
          },
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'img/compressed/',
            ext: '.jpg'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['imagemin']);

};
