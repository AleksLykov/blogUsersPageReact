import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post'
import NoUsers from './NoUsers'

export default class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = { posts : [] }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( res => this.setState({ posts: res.data }))
    }

    render() {
        if (!this.state.posts.length) return <NoUsers />
        const posts = this.state.posts.map( post => {
            return <Post key={post.id} {...post} />
        })
        return (
            <div>
                <h5 className='txt-center'>-== Posts ==-</h5>
                { posts }
            </div>
        )
    }
}
