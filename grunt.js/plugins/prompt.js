/**
 * Prompt namespace
 *
 * Watch
 * - Sass
 * - JS
 * - PHP
 * -- Livereload
 * -- ENV
 *
 *
 */
module.exports = {
    menu: {
        options: {
            questions: [{
                config: 'prompt.choice',
                type: 'list',
                message: 'Choose a task from the list',
                choices: [
                    { name: 'Compile Sass ', value: 'compileSass' },
                    { name: 'Compile Sass ', value: 'compileSass' }
                ]
            }]
        }
    },
    environment: {
        options: {
            questions: [{
                config: 'prompt.env',
                type: 'list',
                message: 'Which environment do you want to work in? <%= config %>',
                choices: [
                    { name: 'Development', value: 'dev' },
                    { name: 'Production', value: 'prod' }
                ]
            }]
        }
    }
};