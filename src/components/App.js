import React from 'react'
import TarefaEntrada from './TarefaEntrada'
import 'bootstrap/dist/css/bootstrap.min.css'
import TarefaLista from './TarefaLista'


export default class App extends React.Component{
  render(){
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <TarefaEntrada></TarefaEntrada>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <TarefaLista></TarefaLista>
                </div>
            </div>
        </div>
    )
  }
}

