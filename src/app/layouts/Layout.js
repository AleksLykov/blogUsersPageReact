import React, { Component } from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'


export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.logo = '../img/logo.png'
        this.menuItems = [
            { href: '/', title: 'Main'},
            { href: '/users', title: 'Юзвери'},
            { href: '/posts', title: 'Посты'},
            { href: '/comments', title: 'Комменты'},
            { href: '/about', title: 'About us'},
            { href: '/contacts', title: 'Contacts'}
        ]
    }
    render() {
        return (
            <div>
                <Menu items = { this.menuItems } logo = { this.logo }/>
                <div className='col-12 main-content'>
                    <div className='container'>
                        {this.props.children}
                    </div>
                </div>
                <Footer /> 
            </div>
        )
    }
}
