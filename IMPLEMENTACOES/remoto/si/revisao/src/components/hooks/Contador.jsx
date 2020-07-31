import React, {useState, useEffect} from 'react'

import './Contador.css'

export default (props)=>{
    
    const [contador,setContador] = useState(0)
    const [status,setStatus] = useState('PAR')

    useEffect(
        ()=>{
            if(contador%2===0) setStatus('PAR')
            else setStatus('ÍMPAR')
        },
        [contador]
    )

    return (
        <div>
            Contador: {contador} <br /> 
            Status: {status}
            <br />
            <button onClick={()=>setContador(contador+1)}>
                Incrementar
            </button> 
            <br />
            <button
            className='btn btn-primary' 
            onClick={()=>setContador(contador-1)}>
                Decrementar
            </button>
        </div>
    )
}