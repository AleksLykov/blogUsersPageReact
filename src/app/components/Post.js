import React, { Component } from 'react'
import { Link } from 'react-router'
import ButtonBack from './ButtonBack'

export default class Post extends Component {
    render() {
        const {pTitle, id, title, body, userId} = this.props
        return (
            <div>
            <h5 className='txt-center'>{ pTitle }</h5>
            <div className='card border-secondary mb-3'>
                <Link to={`/posts/${ id }`} className='no-under'>
                <div className="card-header">Title: { title }</div>
                </Link>
                { pTitle &&
                    <div className="card-body text-secondary">
                        <p>Caption: { body } </p>
                        <p>Wrote by user: { userId} </p>
                    </div> }
            </div>
            { pTitle && <ButtonBack partPath={`/posts`} caption={`posts`}/> }
            </div>
        )
    }
}
