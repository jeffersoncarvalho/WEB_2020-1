import React from 'react'

import Hero from './Hero'
import Enemy from './Enemy'
import {HERO_URL, ENEMY_URL} from '../questao2/constants'
//import TESTE from '../../../img/teste.png'

export default () => {
    return (
        <div>
            <Hero name='Meu Herói' url={HERO_URL}/>
            <Enemy name='Meu Inimigo' url={ENEMY_URL}/>
        </div>
    )
}