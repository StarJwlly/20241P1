import React, { Component } from 'react'
export default class TarefaEntrada extends Component {
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.novaTarefaCallback(event)
    }
    render() {
        return (
        <form onSubmit={this.onFormSubmit}>
            <input className='col-12 mt-2' type='text' id='novaTarefaInput' placeholder='Digite a descrição de uma nova tarefa'></input>
            <button type="button submit" className="btn btn-primary col-12 mt-2" id='novaTarefaButton'>OK</button>
        </form>
        )
    }
}
