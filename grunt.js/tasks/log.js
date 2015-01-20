/**
 * Logs and debugs messages to console
 */
module.exports = function(grunt) {

    grunt.registerTask('log:welcome', function () {
        grunt.removeTaskName();
        grunt.log.write(grunt.getWelcomeMessage());
    });

};