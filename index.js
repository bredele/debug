
/**
 * Module dependencies.
 * @api private
 */

var trace = require('trace');


/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;


/**
 * Expose 'debug'
 */

module.exports = debug;


/**
 * debug constructor.
 * @api public
 */

function debug() {
  trace.on('log', function(name, ms, fmt) {
  	fmt = name
  	  + ' '
  	  + fmt
  	  + ' +' + debug.humanize(ms);
  	console.log(fmt);
  });
}


/**
 * Humanized format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}