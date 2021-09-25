const path = require('path');
const fs = require('fs');
const lotteryPath = path.resolve(__dirname, 'contracts', 'MyContract.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');
const solc = require('solc');
module.exports = solc.compile(source,1).contracts[':MyContract'];
