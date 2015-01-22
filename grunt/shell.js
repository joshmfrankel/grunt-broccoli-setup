module.exports = function (grunt) {


    return {
        vagrant: {
            command: [
                'cd "<%= grunt.getSettingsPath().vagrant %>"',
                'vagrant up'
            ].join('&&')
        }
    };

};
