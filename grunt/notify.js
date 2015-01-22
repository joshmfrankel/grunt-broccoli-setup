module.exports = function (grunt) {
    return {
        welcome: {
            options: {
                title  : "<%= grunt.getTaskRunnerName() %> - Welcome",
                message: "<%= grunt.getWelcomeMessage() %>"
            }
        },
        success: {
            options: {
                title  : "<%= grunt.getTaskRunnerName() %> - Success",
                message: "<%= grunt.getSuccessMessage() %>"
            }
        }
    };
};