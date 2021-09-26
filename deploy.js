const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, object:bytecode} = require('./compile');
const provider = new HDWalletProvider(
  'south lunar thrive critic absent provide swear object elephant combine come weasel',
  'https://rinkeby.infura.io/v3/078b180cf49e4531891cb1168cf4eb51'
);
const web3 = new Web3(provider);

const deploy = async() => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  //console.log(JSON.parse(interface));

  const result = await new web3.eth.Contract(interface)
    .deploy({data:bytecode, arguments:['Hello World!!']})
    .send({gas:'1000000', from:accounts[0]});
  //console.log("Contract deployed to", result.options.address);
}

deploy();
