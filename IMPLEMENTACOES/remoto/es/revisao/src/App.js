import React from 'react';
import './App.css';

/*import OlaMundo from './components/OlaMundo';
import MeuProps from './components/MeuProps'
import { HomemDeFerro as HDF, ViuvaNegra  as VN} from './components/Vingadores'
import Epoca from './components/dark/Epoca'
import Personagem from './components/dark/Personagem'*/
//import IMC from './components/imc/IMC'
//import Pai from './components/filho_pai/Pai'
import MinhaClasse from './components/classes/MinhaClasse'

function App() {
  return(
    <MinhaClasse nome="Jefferson"/>
  ) 
}

/*function App() {
  return(
    <Pai/>
  ) 
}*/

/*function App() {
  return(
    <IMC peso={80} altura={1.83}/>
  ) 
}*/

/*function App() {
  return (
    <div className="App">
      <h1>Jefferson de Carvalho</h1>
      <OlaMundo />
      <MeuProps
        nome='Jefferson'
        cidade='Quixadá'
        alunos={['José', 'Bento', 'Maria']} />
      <HDF nome='Fulano'/>
      <VN nome='Sicrano'/>
      <Epoca epoca='2056' terra="original">
        <Personagem nome='Jonas'/>
        <Personagem nome='Mikkel'/>
        <Personagem nome='Ulrich'/>
        <Personagem nome='Hanna'/>
      </Epoca>
    </div>
  );
}*/

export default App;
