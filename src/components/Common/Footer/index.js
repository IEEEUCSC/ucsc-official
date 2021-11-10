import React from 'react'
import logo from '../../../assets/ieeeucsc.png'
import './index.css';

function Footer() {
    return (

        <div className="footer-basic">
            <footer>
                <div className="logo-foot col-lg-5">
                    <img src={logo} alt="IEEE-UCSC" className="img-foot" style={{width: "50%"}}/>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">About Us</a></li>
                    <li className="list-inline-item"><a href="#">What we do</a></li>
                    <li className="list-inline-item"><a href="#">Timeline</a></li>
                    <li className="list-inline-item"><a href="#">Past Events</a></li>
                    <li className="list-inline-item"><a href="#">Team</a></li>
                    <li className="list-inline-item"><a href="#">Contact Us</a></li>
                </ul>
                <p className="copyright">© 2021 - All Right Reserved</p>
            </footer>
        </div>

    )
}

export default Footer
