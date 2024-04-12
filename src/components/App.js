import React from 'react'
import TarefaEntrada from './TarefaEntrada'
import 'bootstrap/dist/css/bootstrap.min.css'
import TarefaLista from './TarefaLista'


export default class App extends React.Component{

    state = {
        lista: []
    }

    novaTarefaCallback = (event) => {
        let temp = this.state.lista
        temp.push(event.target[0].value)
        this.setState({lista: temp})
    }

    render(){
        return (
            <div>
                <div className='row justify-content-center'>
                    <div className='col-10'>
                        <TarefaEntrada novaTarefaCallback={this.novaTarefaCallback}/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-10'>
                        <TarefaLista tarefas={this.state.lista}/>
                    </div>
                </div>
            </div>
        )
    }
}

