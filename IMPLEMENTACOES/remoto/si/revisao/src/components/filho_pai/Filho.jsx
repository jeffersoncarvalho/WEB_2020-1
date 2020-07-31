import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={
                ()=>{
                 //alert('Cliquei no botão')
                 props.meuCaderno('Feliz aniversário')   
                }
            }>
                Oi pai!
            </button>
        </div>
    )
}