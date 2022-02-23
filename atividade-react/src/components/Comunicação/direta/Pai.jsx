import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho sobrenome = 'Nunes'>Paulo</Filho>
        <Filho sobrenome = 'Nunes'>Victor</Filho>
        <Filho sobrenome = 'Nunes'>Feitosa</Filho>
        <Filho sobrenome = {props.sobrenome}>Nunes</Filho>
    </div>


/*
 Comunicação direta - A passagem de parametros por propriedades, o "pai" passa para o "filho".  
 
 Comunicação indireta - Ocorre do mesmo modo, porém as propriedades, passam do "filho" para o "pai".
*/