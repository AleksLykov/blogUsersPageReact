import React, { Component } from 'react'
import PostsList from '../components/PostsList'

export default class Posts extends Component {
    render() {
        return (
            <div>
            {
                this.props.children ? this.props.children : <PostsList/> 
            }
            </div>
        )
    }
}
