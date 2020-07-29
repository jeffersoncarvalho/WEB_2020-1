import React from 'react'

export default props => {
    return(
        <div>
            <button onClick={
                ()=>{
                    //alert('Jefferson')
                    props.mensagemProMeuPai('Sou eu, o Jefferson')
                }
            }>
                Oi pai
            </button>
        </div>
    )
}