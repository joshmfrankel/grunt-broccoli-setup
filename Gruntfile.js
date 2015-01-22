/**
 * Main Gruntjs File
 *
 * @author Josh Frankel <josh@joshfrankel.me>
 * @copyright Josh Frankel 2015
 * @version 1.0
 *
 * Based off the work of Jimmy Klatt
 * @link https://bitbucket.org/jklatt86/grunt-minion/overview
 */
module.exports = function(grunt) {

    // Set initial config settings
    var config = {
      pkg: grunt.file.readJSON('package.json'),
      env: process.env,
      taskRunner: {}
    };

    ////////////////////
    // PUBLIC METHODS //
    ////////////////////

    /**
     * Helper to return the settings path
     *
     * @return  {json}
     */
    grunt.getSettingsPath = function ()
    {
      return config.pkg.settings.path;
    };

    /**
     * Load the custom runners into the project
     *
     * @author Jimmy Klatt
     * @return  {arr}
     */
    grunt.setTaskRunnerList = function ()
    {
      var files = grunt.file.expandMapping(["**/*.json"], "", { cwd: grunt.getSettingsPath().directory + grunt.getSettingsPath().taskRunners });
      var filenames = [];

      files.forEach(function(element, index, array) {
        filenames.push(element.dest);
      });

      config.taskRunner.list = filenames;
    };

    /**
     * Set the parameter task runner or fallback to the default
     *
     * @param  {str}  runner  The task runner name
     */
    grunt.setTaskRunnerActive = function (runner)
    {
      // Use the default if there isn't a value in the parameter and default exists

      if (!runner || 0 === runner.length) {
        if (config.pkg.settings.taskRunner) {
          runner = config.pkg.settings.taskRunner + '.json';
        } else {
          runner = 'default.json';
        }
      }

      config.taskRunner.active = grunt.file.readJSON(grunt.getSettingsPath().directory + grunt.getSettingsPath().taskRunners + runner);
    };

    // Load the active and runner list
    // Needs to be before other functions to prevent undefined errors
    grunt.setTaskRunnerActive();
    grunt.setTaskRunnerList();

    grunt.getTaskRunnerList = function ()
    {
      return config.taskRunner.list;
    }
    /**
     * Return the current task runner's name
     *
     * @return  {str}
     */
    grunt.getTaskRunnerName = function ()
    {
      return config.taskRunner.active.name;
    };

    /**
     * Return the current task runner's name
     *
     * @return  {str}
     */
    grunt.getTaskRunnerFont = function ()
    {
      return config.taskRunner.active.font;
    };

    /**
     * Grunt.js hack to remove task name from displaying in the console
     *
     * @return  {void}
     */
    grunt.removeTaskName = function ()
    {
      grunt.log.write("\x1B[1A");
      grunt.log.write("\x1B[2K");
    };

    /**
     * Get a random object
     *
     * @param   {object}  object  The object to randomly return
     *
     * @return  {str}
     */
    grunt.returnRandom = function(object)
    {
      return object[Math.floor(Math.random() * object.length)];
    };

    /**
     * Replace {USER} from the runner json file with the actual username
     *
     * @param   {str}  input  The input string
     *
     * @return  {str}
     */
    grunt.replaceUserSymbol = function (input)
    {
      return input.replace('{USER}', config.user.name.capitalize());
    };

    /**
     * Get the welcome message
     *
     * @return  {str}
     */
    grunt.getWelcomeMessage = function ()
    {
      return grunt.replaceUserSymbol(grunt.returnRandom(config.taskRunner.active.welcome));
    };

    /**
     * Get the welcome message
     *
     * @return  {str}
     */
    grunt.getSuccessMessage = function ()
    {
      return grunt.replaceUserSymbol(grunt.returnRandom(config.taskRunner.active.success));
    };

    /**
     * Get the error message
     *
     * @return  {str}
     */
    grunt.getErrorMessage = function ()
    {
      return grunt.replaceUserSymbol(grunt.returnRandom(config.taskRunner.active.error));
    };

    /**
     * Build the user object for easy access later
     */
    config.user = {
      name: process.env.USER.capitalize()
    };

    //grunt.log.writeln(JSON.stringify(config.taskRunner, null, 2));

    ////////////////////////////
    // Load Tasks and Configs //
    // Auto require plugins   //
    ////////////////////////////
    require('load-grunt-config')(grunt, {

      // Data passed into config var
      data: {
        config: config
      }

    });
};


/////////////////////
// PRIVATE METHODS //
/////////////////////

function formatMessage (message) {

  // Get length of message
  var length = message.length;
  var newlineAt = 80;

  // Add newline character every so many characters
  for (var x = newlineAt; x < length; x += newlineAt) {
    message = insert(message, x, "\n");
  }

  return message;
}

function insert(str, index, value) {
    return str.slice(0, index) + value + str.slice(index);
}

/**
 * Capitalize a string
 *
 * @return  {str}
 */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};