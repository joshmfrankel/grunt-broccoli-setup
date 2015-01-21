module.exports = function (grunt) {
    return {
        mainMenu: {
            options: {
                questions: [{
                    config: 'value',
                    type: 'list',
                    message: 'Choose a task from the list',
                    choices: [
                        { name: 'Change task runner personality ', value: 'changeTaskRunner' },
                        { name: "Watch", value: 'prompt:watch' },
                        { name: 'Change development environment', value: 'prompt:environment'}
                    ]
                }],
                then: function (results) {
                    //grunt.log.writeln(JSON.stringify(grunt.config('taskRunner'), null, 2));
                    grunt.task.run(results.value);

                    //console.log(results.value);

                }
            }
        },
        environment: {
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