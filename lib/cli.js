const importer = require('./import');
const path = require('path');

const args = process.argv;
const nodebin = args.shift();
const script = args.shift();
const base = path.join(path.dirname(script));

process.exit(importer(base, args));