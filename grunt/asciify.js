module.exports = function (grunt) {
    return {
        welcome: {
            text: '<%= grunt.getTaskRunnerName() %>',
            options: {
                font: '<%= grunt.getTaskRunnerFont() %>',
                log: true
            }
        }
    };
};