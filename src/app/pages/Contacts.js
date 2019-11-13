import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <p>Email: 123@gmail.com</p>
                <p>Phone: 1234556789</p>
                <p>Number of office: {this.props.params.number?this.props.params.number:'main office'}</p>
            </div>
        )
    }
}
