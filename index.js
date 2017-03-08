'use strict';

/**
 * Module dependencies
 */

var program = require('commander');
var chalk = require('chalk');
var sendmail = require('./libs/sendmail');

/**
 * CLI commander interface
 * @param {String} html_path
 * @param {Object} to
 * @return {void}
 */
program
  .version('0.3.0')
  .command('send <html_path> <to>')
  .description('send a email for testing')
  .option('-s --subject [subject]', 'the subject of the email.', '[MailToolbox Test]')
  .option('-f --from [from]', 'the sender of the email.', 'dudesl@gmail.com')
  .action(function (html_path, to, options) {
    sendmail(options.subject, to, html_path, options.from, function (err) {
      if (err) {
        console.log(chalk.red('Error en el envío del mail.'));
        console.log(chalk.red(err));
        return;
      }
      console.log(chalk.green('Correo de prueba enviado con éxito. Revisa la casilla ' + to));
      process.exit(0);
    });
  });

/**
 * Expose program
 */
module.exports = program;
