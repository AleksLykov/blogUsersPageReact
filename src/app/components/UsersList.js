import React, { Component } from 'react'
import axios from 'axios'
import NoUsers from './NoUsers'
import User from './User'

export default class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then( res => this.setState({ users: res.data }))
    }
    render() {
        if(!this.state.users.length) return <NoUsers />
        const users = this.state.users.map(user => {
            return <User key={user.id} {...user}/>
        })
        return (
            <div>
                <h5 className='txt-center'>-== Users ==-</h5>
                { users }
            </div>
        )
    }
}
