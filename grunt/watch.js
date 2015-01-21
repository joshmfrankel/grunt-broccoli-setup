module.exports = function (grunt) {
    return {
        js: {
            files: ['assets/js/**/*.js'],
            options: {
                livereload: true
            }
        },
        php: {
            files: ['inventory/**/*.php'],
            options: {
                livereload: true
            }
        }
    };
};