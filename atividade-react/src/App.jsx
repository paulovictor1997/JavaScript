import './App.css'
import React from "react";

import Primeiro from './components/Primeiro'
import ComParamentro from'./components/ComParametro'
import ComFilhos from'./components/ComFilhos'
import Card from './components/layout/Card'
import Repetições from './components/Repetições';
import Condicinal from './components/Condicional'
import Pai from './components/Comunicação/direta/Pai';
import Super from './components/Comunicação/indireta/Super';

export default (props) =>(
    <div className="App">
         <Card titulo = "#07 - Comunicações Indiretas">
            <Super></Super>
        </Card>
        
        
        <Card titulo = "#06 - Comunicações Diretas">
            <Pai sobrenome = 'Santos'></Pai>
        </Card>
        
        <Card titulo = "#05 - Condicionais">
            <Condicinal numero = {10}></Condicinal>
        </Card>
        
        
        <Card titulo='#04 - Repetições'>
            <Repetições></Repetições>
        </Card>


        <Card titulo = '#03 - Componente com Filhos'> 
         
        <ComFilhos>
            <ul>
                <li>Paulo</li>
                <li>Victor</li>
                <li>Feitosa</li>
                <li>Nunes</li>
            </ul>
        </ComFilhos>
        
        </Card>

         <Card titulo = '#02 -Componente com Parametro'> 
         
         <ComParamentro titulo="Esse é o título" subtitulo = "Esse é o subtitulo"></ComParamentro>
        
        </Card>

        <Card titulo = '#01 - Primeiro Componente'>
            <Primeiro />
        </Card>
    </div>
)