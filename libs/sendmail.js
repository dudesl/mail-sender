'use strict';

/**
 * Module dependencies
 */
var exec = require('child_process').exec;

/**
 * Send an email with a given subject, to and html file
 */
module.exports = function sendmail(_subject, _to, _html, _from, fn) {
  var command = 'mail -s "$(echo "' + _subject + '\nContent-Type: text/html\nFrom: ' + _from + '")" ' + _to + ' < ' + _html;
  console.log(command);
  exec(command,function (err, stdout, stderr) {
      if (fn) {
        fn(err, stdout, stderr);
      }
    }
  );
};
