import React, { Component } from 'react'
import axios from 'axios'
import NoUsers from './NoUsers'
import Comment from './Comment'


export default class CommentsList extends Component {
    constructor(props) {
        super(props)
        this.state = { comments : [] }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then( res => this.setState({ comments : res.data }))
    }

    render() {
        if(!this.state.comments.length) return <NoUsers/>
        const comments = this.state.comments.map( comment => {
            return <Comment key={comment.id} {...comment} />
        })
        return (
            <div>
                <h5 className='txt-center'>-== Comments ==-</h5>
                { comments }
            </div>
        )
    }
}
