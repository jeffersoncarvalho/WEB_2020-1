import React from 'react'

export default (props) => {
   
    const imc = (props) => {
        return props.peso / (props.altura * props.altura)
    }

    //função interna a ser usado pelo componente
    function calculaIMC(peso, altura) {
        return peso / (altura * altura)
    }

    //retorno obrigatório do JSX de um componente REACT
    return (
        <div>
            Peso: {props.peso}, altura: {props.altura} <br />
            O seu IMC é: {calculaIMC(props.peso,props.altura)} <br />
            O seu IMC é: {imc(props)}
        </div>
    )
}

