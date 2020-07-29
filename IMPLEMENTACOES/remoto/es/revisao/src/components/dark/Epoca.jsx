import React from 'react'
//versão hardcoded
/*import Personagem from './Personagem'

export default props =>
    <div>
        <Personagem nome='Jonas' epoca='2019'/>
        <Personagem nome='Mikkel' epoca='1986'/>
        <Personagem nome='Ulrich' epoca='1953'/>
        <Personagem nome='Hanna' epoca='1953'/>
    </div>*/
/*export default props =>
    <div>
        {props.children}    
    </div>
*/

export default props =>
<div>
    <h1>Ano {props.epoca} da Terra {props.terra}</h1>
    {
        //loop em todos os componentes filhos de Epoca
        React.Children.map(
            props.children,
            (personagem) => {
                return React.cloneElement(personagem,{...props})
            }
        )
    }
</div>