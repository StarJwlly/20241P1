import React, { Component } from 'react'
export default class TarefaLista extends Component {

    render() {
        return (
            <div className='row border border-2 rounded pt-3 pb-3 mt-2 justify-content-center'>
                {
                    this.props.tarefas.map (c => 
                        <div className='row col-10 border border-1 mt-1 mb-1'>
                            <center>{c}</center>
                        </div>
                    )
                }
            </div>
        )
    }
}
