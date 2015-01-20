module.exports = {
    welcome: {
        options: {
            title  : "<%= grunt.getTaskRunnerName() %> - Welcome",
            message: "<%= grunt.getWelcomeMessage() %>"
        }
    },
    fail: {
        options: {
            title: '<%= grunt.getTaskRunnerName() %> - Error',
            message: "<%= grunt.getErrorMessage() %>"
        }
    }
};