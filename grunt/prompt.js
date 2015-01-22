module.exports = function (grunt) {
    return {
        mainMenu: {
            options: {
                questions: [{
                    config: 'value',
                    type: 'list',
                    message: 'Choose a task from the list',
                    choices: [
                        { name: 'Change task runner personality ', value: 'prompt:changeTaskRunner' },
                        { name: "Watch files", value: 'prompt:watch' },
                        { name: "Vagrant", value: 'prompt:vagrant' },
                        { name: 'Change development environment', value: 'prompt:changeEnvironment'}
                    ]
                }],
                then: function (results) {
                    grunt.task.run(results.value);
                }
            }
        },
        watch: {
            options: {
                questions: [{
                    config: 'value',
                    type: 'list',
                    message: 'Which files would you like to poll for changes?',
                    choices: [
                        { name: 'All files', value: 'watch-all-files' },
                        { name: 'PHP', value: 'watch:php' },
                        { name: 'JS', value: 'watch:js' }
                    ]
                }],
                then: function (results) {
                    grunt.task.run(results.value);
                }
            }
        },
        vagrant: {
            options: {
                questions: [{
                    config: 'value',
                    type: 'list',
                    message: 'Choose a Vagrant action.',
                    choices: [
                        { name: 'Vagrant Up', value: 'shell:vagrant' }
                    ]
                }],
                then: function (results) {
                    grunt.task.run(results.value);
                    grunt.task.run('prompt:mainMenu');
                }
            }
        },
        ////////////////////
        // CONFIG OPTIONS //
        ////////////////////
        changeTaskRunner: {
            options: {
                questions: [{
                    config: 'value',
                    type: 'list',
                    message: 'Choose a new personality',
                    choices: grunt.getTaskRunnerList()
                }],
                then: function (results) {
                    grunt.setTaskRunnerActive(results.value);

                    // Reset service
                    grunt.task.run('default');
                }
            }
        },
        changeEnvironment: {
            options: {
                questions: [{
                    config: 'prompt.env',
                    type: 'list',
                    message: 'Which environment do you want to work in?',
                    choices: [
                        { name: 'Development', value: 'dev' },
                        { name: 'Production', value: 'prod' }
                    ]
                }]
            }
        },
    };

};
