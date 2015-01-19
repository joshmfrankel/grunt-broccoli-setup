
module.exports = function(grunt) {

    // Initial config
    var config = {
      pkg: grunt.file.readJSON('package.json'),
      env: process.env
    };

    // Merge the initial config with the loaded configuration files
    grunt.util._.extend(config, loadConfig(config.pkg.gruntSettings.path.directory + config.pkg.gruntSettings.path.plugins));

    // Load config
    grunt.initConfig(config);

    //grunt.log.writeln(JSON.stringify(grunt.config('env').USER, null, 2));

    // Require all the plugins
    require('load-grunt-tasks')(grunt);

    // Load all the external tasks
    grunt.loadTasks(config.pkg.gruntSettings.path.directory + config.pkg.gruntSettings.path.tasks);
};


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