import React, { Component } from 'react'
import axios from 'axios'
import CommentProfile from '../components/Comment'
import NoUsers from '../components/NoUsers'

export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = { comment : null }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
        .then( res => this.setState({ comment: res.data }))
    }

    render() {
        return (
            <div>
                {
                this.state.comment ? <CommentProfile {...this.state.comment} cTitle={'-== Current comment ==-'}/> : <NoUsers/>
                }
            </div>
        )
    }
}
