const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, object:bytecode} = require('./compile');
const provider = new HDWalletProvider(
  'south lunar thrive critic absent provide swear object elephant combine come weasel',
  'https://rinkeby.infura.io/v3/078b180cf49e4531891cb1168cf4eb51'
);
const web3 = new Web3(provider);
const INITIAL_STRING = "Hello World!!";
let myContract;
let accounts;

const deploy = async() => {

  accounts = await web3.eth.getAccounts();
  myContract = await new web3.eth.Contract(interface)
  .deploy({data:bytecode,arguments:[INITIAL_STRING]})
  .send ({from: accounts[0], gas:'1000000'});

  console.log(myContract.options.address);
  //console.log("Contract deployed to", result.options.address);
}

deploy();
