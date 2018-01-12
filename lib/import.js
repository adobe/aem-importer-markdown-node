const $ = require('shelljs');
const path = require('path');

module.exports = function (base, args) {
  const command = "java -jar " + path.join(base, 'aem-importer-markdown-0.0.11-jar-with-dependencies.jar') + " " + args.join(" ");
  console.log(command);
  return $.exec(command, { silent: false }).code;
}