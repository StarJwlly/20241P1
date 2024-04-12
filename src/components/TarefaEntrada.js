import React, { Component } from 'react'
export default class TarefaEntrada extends Component {
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.novaTarefaCallback()
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
            <div className='row'>
                <div className='col-1'></div>
                <input className='col-10 mt-2' type='text' id='novaTarefaInput' placeholder='Digite a descrição de uma nova tarefa'></input>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <button type="button" className="btn btn-primary col-10 mt-2" id='novaTarefaButton'>OK</button>
            </div>
      </form>
    )
  }
}
