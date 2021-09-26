import web3 from './web3';
import MyContract from './build/MyContract.json';
const instance = new web3.eth.Contract(
  JSON.parse(MyContract.interface),
  '0x6Ec4010f4ae71C6b988C45051eb16C687eE58a59' //put here the address of the contract
);
export default instance
