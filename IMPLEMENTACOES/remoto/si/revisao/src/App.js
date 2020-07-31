import React from 'react';
import './App.css';

import HelloWorld from './components/HelloWorld';
import { DirtyJonas as Jonas, OldMartha as Martha } from './components/Dark'
import Time from './components/dark/Time'
import Character from './components/dark/Character'
import IMC from './components/imc/IMC'
import Pai from './components/filho_pai/Pai'
import MinhaClasse from './components/classes/MinhaClasse'
import CidadeSimples from './components/classes/CidadeSimples'
import Contador from './components/hooks/Contador'

function App() {
  return (
    <div className="App">
      <Contador />
      {/*<CidadeSimples/>
      <MinhaClasse nome="Jefferson"/>
      <Pai/>
      <IMC peso={80} altura={1.83}/>
      <HelloWorld name="Jefferson" age="38"/>
      <Jonas year={2019}/>
      <Martha year={2052}/>
      <Time />*/}
      <Time time='2019' earth='original'>
        <Character name='Ulrich Nielsen'/>  
        <Character name='Mikkel Nielsen'/> 
        <Character name='Claudia Tiedman' />  
      </Time>

       

    </div>
  );
}

export default App;
