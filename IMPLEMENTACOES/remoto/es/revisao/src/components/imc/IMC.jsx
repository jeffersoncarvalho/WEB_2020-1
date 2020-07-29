import React from 'react'

export default props => {
    
    const imc = (props) => {
        return props.peso/(props.altura*props.altura)
    }

    function calcularIMC(peso,altura){
        const imc = peso/(altura*altura)
        return imc
    }

    return (
        <div>
            <h3>
            O IMC para o peso {props.peso} e
             altura {props.altura} é: {calcularIMC(props.peso,props.altura)}
            </h3>
            <h3>
            O IMC para o peso {props.peso} e
             altura {props.altura} é: {imc(props)}
            </h3>
        </div>
    )
}