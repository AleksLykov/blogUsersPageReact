import React, { Component } from 'react'
import axios from 'axios'
import PostProfile from '../components/Post'
import NoUsers from '../components/NoUsers'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = { post : null }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then( res => this.setState({ post: res.data }))
    }
    render() {
        return (
            <div>
                {
                this.state.post ? <PostProfile {...this.state.post} pTitle={'-== Current post ==-'}/> : <NoUsers/>
                }
            </div>
        )
    }
}
