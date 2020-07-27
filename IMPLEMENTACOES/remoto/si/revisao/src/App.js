import React from 'react';
import './App.css';

import HelloWorld from './components/HelloWorld';
import { DirtyJonas as Jonas, OldMartha as Martha } from './components/Dark'
import Time from './components/dark/Time'
import Character from './components/dark/Character'


function App() {
  return (
    <div className="App">
      <HelloWorld name="Jefferson" age="38"/>
      <Jonas year={2019}/>
      <Martha year={2052}/>
      {/*<Time />*/}
      <Time>
        <Character name='Ulrich Nielsen' time='1986'/>
        <Character name='Mikkel Nielsen' time='2019'/>
        <Character name='Claudia Tiedman' time='2056'/>
        <Character name='Ulrich Nielsen' time='1986'/>
        <Character name='Mikkel Nielsen' time='2019'/>
        <Character name='Claudia Tiedman' time='2056'/>
      </Time>
    </div>
  );
}

export default App;
