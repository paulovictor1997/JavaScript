import React, { useState }from 'react'

export default (props) =>{
    const [nome, setNome] = useState('Paulo');
    return(
        <div>
            <h3>Caixa de Input</h3>
            <h4>{nome}</h4>
            <input type="text" value={nome} 
            onChange = {e => setNome(e.target.value)}/>
        </div>
    )
}