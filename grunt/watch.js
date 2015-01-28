module.exports = function (grunt) {
    var port = 1337;

    return {
        sass: {
            files: [grunt.getSettingsPath().sass.watch],
            options: {
                livereload: port
            },
            tasks: ['sass:compile', 'notify:success']
        },
        js: {
            files: [grunt.getSettingsPath().js],
            options: {
                livereload: port
            },
            tasks: ['notify:success']
        },
        php: {
            files: [grunt.getSettingsPath().php],
            options: {
                livereload: port
            },
            tasks: ['notify:success']
        }
    };
};
