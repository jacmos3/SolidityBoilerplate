import React, {Component} from 'react';
import myContract from '../ethereum/myContract';

class MyDapp extends Component{
  state = {
    message:"Retrieving message from the blockchain"
  };

  async componentDidMount(){
    console.log("myContract follows");
    console.log(myContract);
    const message = await myContract.methods.message().call();
    this.setState({message:message});
    console.log(message);
  }
  render(){
    return <h1>{this.state.message}</h1>
  }
}

export default MyDapp;
