import React from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    isActive(href) {
        /[-0-9]+/.test(window.location.pathname) ? 
            href+='/'+window.location.pathname.match(/[-0-9]+/)[0] : href
        return window.location.pathname === href
    }

    render() {
        const items = this.props.items.map((item, index) => 
            <MenuItem key={index} href={item.href}
            active={ this.isActive(item.href) }>{item.title}</MenuItem>)
        
        return (
            <div className='navbar-main'>
                <Link to="/"><img src={this.props.logo} className='menu-logo'  height={50} alt='Company logo'></img></Link>
                <nav className='menu-wrapper'>
                    <ul className='menu-list'> {items} </ul>
                </nav>
            </div>
        )
    }
}





            // <div className='navbar navbar-expand-lg navbar-light bg-light'>
            //     <Link to="/"><img src={this.props.logo} className='menu-logo'  height={50} alt='Company logo'></img></Link>
            //     <nav className='navbar-collapse menu-wrapper'>
            //         <ul className='navbar-nav menu-list'> {items} </ul>
            //     </nav>
            // </div>