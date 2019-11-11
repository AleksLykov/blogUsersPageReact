import React, { Component } from 'react'
import Menu from '../components/Menu'


export default class Layout extends Component {
    render() {
        const menuItems = [
            { href: '/', title: 'Main'},
            { href: '/users', title: 'Users'},
            { href: '/tech', title: 'Technical'},
            { href: '/about', title: 'About us'},
            { href: '/contacts', title: 'Contacts'}
        ]
        const logoMainPath = '../img/logo.png'
        return (
            <div className='container'>
                <div className="row">
                    <Menu items = { menuItems } logoLink = {logoMainPath}/>
                    <div className="col-1"></div>
                    <div className="col-10">
                        {this.props.children}
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        )
    }
}
