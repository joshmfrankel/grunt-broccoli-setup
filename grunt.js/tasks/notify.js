
module.exports = function(grunt) {

    grunt.registerTask('default', 'The default task', [
        'notify:init'
    ]);

    grunt.registerTask('other', 'The default task', [
        'notify:other'
    ]);

};