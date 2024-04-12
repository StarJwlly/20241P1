import React from 'react'
import TarefaEntrada from './TarefaEntrada'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class App extends React.Component{
  render(){
    return (
        <div>
            <div className='row'>
                <div className='col-1'/>
                <div className='col-10'>
                    <TarefaEntrada></TarefaEntrada>
                </div>
            </div>
            
        </div>
    )
  }
}

