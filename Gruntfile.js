module.exports = function(grunt) {

    var config = {
      pkg: grunt.file.readJSON('package.json'),
      env: process.env
    };

    /////////////
    // HELPERS //
    /////////////

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
    grunt.loadRunners = function ()
    {
      var files = grunt.file.expandMapping(["**/*.json"], "", { cwd: grunt.getSettingsPath().directory + grunt.getSettingsPath().runners });
      var filenames = [];

      files.forEach(function(element, index, array) {
        filenames.push(element.dest);
      });

      return filenames;
    };

    /**
     * Build the user object for easy access later
     */
    config.runners = grunt.loadRunners();
    config.user = {
      name: process.env.USER.capitalize()
    };

    // If there is a default taskrunner then load it
    if (config.pkg.settings.taskRunner) {
      config.taskRunner = {
        current:
          grunt.getSettingsPath().directory
          + grunt.getSettingsPath().runners
          + config.pkg.settings.taskRunner
          + '.json'
      };
    } else {
      // prompt user for which runner to use
      // TODO
    }

    // Load the task runner json config file
    config.taskRunner.json = grunt.file.readJSON(config.taskRunner.current);

    //grunt.log.writeln(JSON.stringify(config.runners, null, 2));

    // Merge the initial config with the loaded configuration files
    grunt.util._.extend(config, loadConfig(grunt.getSettingsPath().directory + grunt.getSettingsPath().plugins));

    // Load config
    grunt.initConfig(config);

    //grunt.log.writeln(JSON.stringify(grunt.config('env').USER, null, 2));

    // Require all the plugins
    require('load-grunt-tasks')(grunt);

    // Load all the external tasks
    grunt.loadTasks(grunt.getSettingsPath().directory + grunt.getSettingsPath().tasks);

    /////////////
    // HELPERS //
    /////////////

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
     * Return the current task runner's name
     *
     * @return  {str}
     */
    grunt.getTaskRunnerName = function ()
    {
      return config.taskRunner.json.name;
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
      return grunt.replaceUserSymbol(grunt.returnRandom(config.taskRunner.json.welcome));
    };

    /**
     * Get the error message
     *
     * @return  {str}
     */
    grunt.getErrorMessage = function ()
    {
      return grunt.replaceUserSymbol(grunt.returnRandom(config.taskRunner.json.error));
    };

};

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
 * Load Config helper
 *
 * @param   {str}  path  The path to the options folder
 * @link http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
 *
 * @return  {arr}
 */
function loadConfig(path) {
  var glob = require('glob');
  var object = {};
  var key;

  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });

  return object;
}

/**
 * Capitalize a string
 *
 * @return  {str}
 */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};