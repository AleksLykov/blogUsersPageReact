import React, { Component } from 'react'
import UsersList from '../components/UsersList'

export default class Users extends Component {
    render() {
        return (
            <div>
                {
                this.props.children ? this.props.children : <UsersList />
                }
            </div>
        )
    }
}