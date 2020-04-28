import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-main'>
                <div className="footer-main__copyright col-4">
                    <span className="footer-main__copyright-title">Copyright &copy; 2019</span>
                </div>
                <div className="footer-center col-4"></div>
                <div className="footer-main__autors col-4">
                    <span className="footer-main__autors-text">Designed by Aleks Lykov</span>
                </div>
            </div>
        )
    }
}
