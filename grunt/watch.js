module.exports = function (grunt) {
    return {
        js: {
            files: [grunt.getSettingsPath().js],
            options: {
                livereload: true
            },
            tasks: ['notify:success']
        },
        php: {
            files: [grunt.getSettingsPath().php],
            options: {
                livereload: true
            },
            tasks: ['notify:success']
        }
    };
};
