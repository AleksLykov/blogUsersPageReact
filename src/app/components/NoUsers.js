import React, { Component } from 'react'

export default class NoUsers extends Component {
    render() {
        return (
            <div className='row justify-content-center'>
                <img  className='' src='../img/spiner.gif' alt='loading...' width='350'></img>
            </div>
        )
    }
}
