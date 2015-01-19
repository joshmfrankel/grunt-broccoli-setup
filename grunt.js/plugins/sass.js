module.exports = {
    dev: {
        options: {
            style: 'expanded',
            lineNumbers: true
        },
        src: '<%= pkg.gruntSettings.path.sass.src %>',
        dest: '<%= pkg.gruntSettings.path.sass.dest %>'
    },
    prod: {
        options: {
            style: 'compressed',
            sourcemap: 'none'
        },
        src: '<%= pkg.gruntSettings.path.sass.src %>',
        dest: '<%= pkg.gruntSettings.path.sass.dest %>'
    }
};