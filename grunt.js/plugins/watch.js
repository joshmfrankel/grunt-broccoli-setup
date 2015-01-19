module.exports = {
    // sass: {
    //     files: ['**/*.{scss,sass}'],
    //     tasks: ['sass']
    // },
    js: {
        files: ['assets/js/**/*.js'],
        options: {
            livereload: true,
        }
    },
    php: {
        files: ['inventory/**/*.php'],
        options: {
            livereload: true,
        }
    }
};