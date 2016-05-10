"use strict";

var config = {};



/*
* JavaScript configuration
*/
config.js = {};
config.js.SOURCE_DIR = __dirname + '/source/';
config.js.DEST_DIR = __dirname + '/dist/';
config.js.DIST_NAME = 'aquery'; //name of compiled file to be served i.e. app.js and app.min.js
config.js.core_files = ['core_start', 'core_end'];

//modules
config.js.app_files = ['attributes', 'css_base', 'transitions_basic', 'events'];

//add core
config.js.app_files.unshift(config.js.core_files[0]);
config.js.app_files.push(config.js.core_files[1]);

//add source dir prefix and .js suffix to js source files
config.js.app_files = config.js.app_files.map(function(file){return config.js.SOURCE_DIR + 'aquery.' + file + '.js';});




/*
* Export config
*/
module.exports = config;