module.exports = function (grunt) {
    return {
        welcome: {
            text: '<%= grunt.getTaskRunnerName() %>',
            options: {
                font: 'larry3d',
                log: true
            }
        }
    };
};