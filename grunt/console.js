module.exports = function (grunt) {
    grunt.registerTask('console:welcome', function () {
        grunt.removeTaskName();
        grunt.log.write(grunt.getWelcomeMessage());
    });
};