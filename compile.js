const path = require('path');
const fs = require('fs');
const solc = require('solc');
const myPath = path.resolve(__dirname, 'contracts', 'MyContract.sol');
const source = fs.readFileSync(myPath, 'utf8');
const input = {
    language: 'Solidity',
    sources: {
        'MyContract.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
  }
//console.log(JSON.parse(solc.compile(JSON.stringify(input))));

const { abi: interface, evm: { bytecode: { object } } } =
JSON.parse(solc.compile(JSON.stringify(input))).contracts['MyContract.sol'].MyContract; //


module.exports = { interface, object }; // object is the actual name of the bytecode
