module.exports = function (grunt) {
    return {
        welcome: {
            options: {
                title  : "<%= grunt.getTaskRunnerName() %> - Welcome",
                message: "<%= grunt.getWelcomeMessage() %>"
            }
        }
    };
};