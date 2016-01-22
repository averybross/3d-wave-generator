module.exports = function(grunt) {
    // Load dev dependencies
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    require('load-grunt-tasks')(grunt);

    // Time how long tasks take for build time optimizations
    require('time-grunt')(grunt);

    // Configure the app path
    var base = 'app';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: grunt.file.readJSON('bowercopy.json'),
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [ 'dist' ]
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [ base + '/js/*.js' ]
        },
        jsonlint: {
            pkg: [ 'package.json' ],
            bower: [ '{bower,bowercopy}.json' ]
        },
        watch: {
            // Watch javascript files for linting
            js: {
                files: [
                    base + '/js/**/*.js'
                ],
                tasks: ['browserify', 'serve']
            },
            css: {
                files: [
                    'app/css/**/*'
                ],
                tasks: ['copy:css']
            },
            images: {
                files: [
                    'app/images/**/*'
                ],
                tasks: ['copy:images']
            },
            json: {
                files: [
                    '{package,bower}.json'
                ],
                tasks: ['jsonlint']
            },
            // Live reload
            reload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= watch.js.files %>',
                    '<%= watch.json.files %>',
                    base + '/css/**/*.css',
                    '**/*.html'
                ]
            }
        },
        browserify: {
          dist: {
            files: {
              'dist/js/main.js': ['app/js/main.js']
            },
          }
        },
        copy: {
          dist: {
            src: 'app/index.html',
            dest: 'dist/index.html'
          },
          css: {
            cwd: 'app/css/',
            src: '**/*',
            dest: 'dist/css/',
            expand: true           // required when using cwd
          },
          images: {
            cwd: 'app/images/',
            src: '**/*',
            dest: 'dist/images/',
            expand: true           // required when using cwd
          }
        }
    });

    grunt.registerTask('serve', ['connect:livereload','watch']);

    grunt.registerTask('default', ['browserify','copy', 'serve']);
};
