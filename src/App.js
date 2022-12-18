import React, { Component } from 'react'
import Counter from './components/Counter';
import Multiplier from './components/Multiplier';
import Divider from './components/Divider';
import Subtractor from './components/Subtractor';
export default class App extends Component {
  render() {
    return (
      <div className='p-4 flex flex-wrap h-screen content-center gap-y-16'>
        <Multiplier />
        <Subtractor/>
        <Divider/>
        <Counter/>
      </div>
    )
  }
}

