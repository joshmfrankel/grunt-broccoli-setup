module.exports = {
    dev: {
        options: {
            style: 'expanded',
            lineNumbers: true
        },
        src: '<%= grunt.getSettingsPath().sass.src %>',
        dest: '<%= grunt.getSettingsPath().sass.dest %>'
    },
    prod: {
        options: {
            style: 'compressed',
            sourcemap: 'none'
        },
        src: '<%= grunt.getSettingsPath().sass.src %>',
        dest: '<%= grunt.getSettingsPath().sass.dest %>'
    }
};