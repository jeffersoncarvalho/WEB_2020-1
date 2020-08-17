import React from 'react';
import './App.css';

//import Questao1 from './components/atividade1/Questao1'
//import Questao2 from './components/atividade1/Questao2'
//import Questao3 from './components/atividade1/questao3/Pai'
//import Questao4 from './components/atividade1/questao4/Pai'

//import Arena from './components/atividade2/questao1/Arena'
import World from './components/atividade2/questao3/World'

import ArenaDinamica from './components/atividade2/questao4/Arena'
import Hero from './components/atividade2/questao1/Hero'
import Enemy from './/components/atividade2/questao1/Enemy'
import { HERO_URL, ENEMY_URL } from './components/atividade2/questao2/constants'



/*function App(){
  return (
    <div className='App'>
      <World>
        <h2>Arena 1</h2>
        <Arena arena='Castelão'/>
        <h2>Arena 2</h2>
        <Arena arena='PV'/>
      </World>
    </div>
  )

}*/

function App() {
  return (
    <div className="App">
      <World>
        <ArenaDinamica arena='Castelão TESTE'>
          <Hero name='Meu Herói 1' url={HERO_URL} />
          <Enemy name='Meu Inimigo 1' url={ENEMY_URL} />
        </ArenaDinamica>

        <ArenaDinamica arena='Pici'>
          <Hero name='Meu Herói 2' url={HERO_URL} />
          <Enemy name='Meu Inimigo 2' url={ENEMY_URL} />
        </ArenaDinamica>
      </World>
    </div>
  );
}

export default App;
