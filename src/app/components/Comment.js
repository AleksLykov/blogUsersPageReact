import React, { Component } from 'react'
import { Link } from 'react-router'
import ButtonBack from './ButtonBack'


export default class Comment extends Component {
    render() {
        const {cTitle, id, name, email, body, postId} = this.props
        return (
            <div>
            <h5 className='txt-center'>{ cTitle }</h5>
            <div className='card border-secondary mb-3'>
                <Link to={`/comments/${ id }`} className='no-under'>
                <div className="card-header">{ name }</div>
                </Link>
                { cTitle &&
                    <div className="card-body text-secondary">
                        <p>From post: { postId } </p>
                        <p> { body } </p>
                        <p>E-mail: { email } </p>
                    </div> }
            </div>
            { cTitle && <ButtonBack partPath={`/comments`} caption={`comments`}/>
                }
            </div>
        )
    }
}