module.exports = function(grunt) {

    // Set welcome message for consistency
    grunt.registerTask('default', 'The default grunt loading task', [
        'notify:welcome',
        'asciify:welcome',
        'log:welcome',
        'prompt:menu'
    ]);

    grunt.registerTask('watch', function() {
        console.log('test');
    });

};