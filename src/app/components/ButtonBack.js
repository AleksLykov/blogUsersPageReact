import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ButtonBack extends Component {
    render() {
        return (
            <div>
            <Link to={this.props.partPath} className='no-under'>
            <button type="button" className="btn btn-outline-secondary">Back to {this.props.caption}</button></Link>
            </div>
        )
    }
}
