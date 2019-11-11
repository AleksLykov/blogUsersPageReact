import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router'

export default class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => 
            <MenuItem key={index} href={item.href}>{item.title}</MenuItem>)
        return (
            <div className='navbar col-12'>
                <Link to="/"><img src={this.props.logoLink} className='menu-logo'  height={50} alt='Company logo'></img></Link>
                <nav className='menu-wrapper'>
                    <ul className='menu-list'> {items} </ul>
                </nav>
            </div>
        )
    }
}