import web3 from './web3';
import MyContract from './build/MyContract.json';
require('dotenv').config()
const contractAddress = process.env.CONTRACT_ADDRESS;

const instance = new web3.eth.Contract(JSON.parse(MyContract.interface), contractAddress );
export default instance
