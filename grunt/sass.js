module.exports = function (grunt) {

    return {
        compile: {
            options: {
                style: 'expanded'
            },
            files: [{
                expand: true,
                cwd: "<%= grunt.getSettingsPath().sass.src %>",
                src: ['*.scss'],
                dest: "<%= grunt.getSettingsPath().sass.dest %>",
                ext: '.css'
            }]
        }
    };
};
