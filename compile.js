const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contracts', 'TandaPay.sol');
const source = fs.readFileSync(contractPath, 'utf8');

// console.log(solc.compile(source, 1).contracts[':Tandapay']);

module.exports = solc.compile(source, 1).contracts[':Tandapay'];
