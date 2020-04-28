import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

export default class MenuItem extends React.Component {
    render() {
        return (
            <li className='menu-list_item'>
                <Link to={this.props.href} className={ this.props.active? 'menu-list_link active':'menu-list_link'}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}