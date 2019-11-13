import React, { Component } from 'react'
import { Link } from 'react-router'
import ButtonBack from './ButtonBack'

export default class User extends Component {
    render() {
        const {title, id, name, email, phone, website, username} = this.props
        return (
            <div>
            <h5 className='txt-center'>{ title }</h5>
            <div className='card border-secondary mb-3'>
                <Link to={`/users/${ id }`} className='no-under'>
                <div className="card-header">{ username }</div>
                </Link>
                { title &&
                    <div className="card-body text-secondary">
                        <p>Fullname: { name } </p>
                        <p>E-mail: { email } </p>
                        <p>Phone: { phone } </p>
                        <p>Personal website: { website } </p>
                    </div> }
            </div>
            { title && <ButtonBack partPath={`/users`} caption={`users`}/> }
            </div>
        )
    }
}

