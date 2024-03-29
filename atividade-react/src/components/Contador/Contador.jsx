import './Contador.css'
import React, { Component }from "react";

export default class Contador extends Component {
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = ()=>{
        this.setState({
            valor: this.state.valor + this.state.passo
        })
       
    }

    dec = ()=>{
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render(){
        return(
            <div className='Contador'>
            <h2>Contador</h2>
            <div>
                <label>Passo: </label>
                <input type="number" value={this.state.passo}
                onChange={e => this.setState({passo: + e.target.value})} />
                <h4>Valor: {this.state.valor}</h4>
            </div>
            

            <div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
            </div>
        )
    }
}