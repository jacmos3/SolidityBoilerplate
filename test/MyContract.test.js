// contract test code will go here
const assert = require('assert';
const ganache = require('ganache-cli')
const Web3 = require('web3');

//we now use ganache provider, but in future we should change here to set the real 
const web3 = new Web3(ganache.provider());
