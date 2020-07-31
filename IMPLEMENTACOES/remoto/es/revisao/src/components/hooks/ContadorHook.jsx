import React, {useState, useEffect} from 'react'

export default (props) => {
    
    const [cont, setCont] = useState(0)
    const [status, setStatus] = useState('PAR')

    useEffect(
        ()=>{
            //alert('TESTE')
            if(cont % 2 === 0) setStatus('PAR')
            else setStatus('ÍMPAR')
        },
        [cont]
    )

    return (
        <div>
            <h2>Contador com Hooks</h2>
            Contador: {cont} <br />
            <button onClick={()=>{setCont(cont+1)}}>
                Incrementar
            </button> <br />
            <button onClick={()=>{setCont(cont-1)}}>
                Decrementar
            </button><br />
            STATUS: {status}
        </div>
    )
}