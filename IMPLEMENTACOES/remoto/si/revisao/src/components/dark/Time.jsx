import React from 'react'

//import Character from './Character'

export default (props) => 
<div>
    Época: {props.time}, Terra: {props.terra}
    {
        React.Children.map(
            props.children,
            (character)=>{
              //clonar cada filho, passando time como propriedade pro clone
              return React.cloneElement(character,{...props})  
            }
        )
    }
</div>

/*export default (props) => 
<div>
    {props.children}
</div>
*/

/*export default (props) =>
    <div>
        <Character name='Ulrich Nielsen' time='1986'/>
        <Character name='Mikkel Nielsen' time='2019'/>
        <Character name='Claudia Tiedman' time='2056'/>
        <Character name='Claudia Tiedman' time='2056'/>
    </div>*/