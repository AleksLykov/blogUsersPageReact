import React, { Component } from 'react'
import axios from 'axios'
import UserProfile from '../components/User'
import NoUsers from '../components/NoUsers'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = { user : null }
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
        .then( res => this.setState({ user: res.data }))
    }

    render() {
        return (
            <div>
                {
                this.state.user ? <UserProfile {...this.state.user} title={'-== Current user ==-'}/> : <NoUsers/>
                }
            </div>
        )
    }
}
