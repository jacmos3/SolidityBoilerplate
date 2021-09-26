import React, {Component} from 'react';
import myContract from '../ethereum/myContract';

class MyDapp extends Component{
  async componentDidMount(){
    const c = await myContract.methods.getMessage().call();
    console.log(c);
  }
  render(){
    return <h1> Hello! </h1>
  }
}

export default MyDapp;
