module.exports = function(grunt) {

    grunt.registerTask('compileSass', function () {
        try {
            grunt.task.run('sass:dev');
        } catch (err) {
            console.log(err);
        }
    });

};