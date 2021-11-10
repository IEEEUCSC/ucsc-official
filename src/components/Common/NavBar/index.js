// import React from 'react'
// import { Link } from 'react-scroll';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome, faAddressCard, faInfinity, faStream, faNewspaper, faUserFriends, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
// import './index.css'
// import logo from "../../../assets/ieeeucsc.png"
// import logoieee from "../../../assets/logo-ieee.svg"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
//
// const Navbar = (props) => {
//     const {showLinks} = props;
//     return (
//         <div className="tophead">
//             <div className="row row-topnav">
//                 <div className="col-lg-6 col-sm-8 col-xs-8" id="logo" role="logo">
//                     <a href="#" >
//                         <img src={logo} alt="IEEE-UCSC" style={{ width: "30%" }} />
//                     </a>
//                 </div>
//                 <div className="col-lg-6 col-sm-4 d-none d-sm-block ieeeL" id="search">
//                     <div className="ieeelogo">
//                         <a href="https://www.ieee.org/" target="_blank" id="logo-ieee"><img src={logoieee} alt="IEEE" /></a>
//                     </div>
//                 </div>
//             </div>
//             {showLinks && <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"/>
//                 </button>
//                 <div className="collapse navbar-collapse " id="navbarSupportedContent">
//                     <ul className="navbar-nav mx-auto" >
//                         <li className="nav-item">
//                             <Link
//                                 activeclassName="active"
//                                 className="nav-item"
//                                 to="home"
//                                 spy={false}
//                                 smooth={true}
//                                 offset={0}
//                                 duration={500}
//                             >
//                                 <a className="nav-link" href="" >  <FontAwesomeIcon icon={faHome} /> Home</a>
//                                 {/* <span className="sr-only">(current)</span> */}
//                             </Link></li>
//                         <li className="nav-item">
//                             <Link
//                                 activeclassName="active"
//                                 className="nav-item"
//                                 to="aboutus"
//                                 spy={true}
//                                 smooth={true}
//                                 offset={0}
//                                 duration={500}
//                             >
//                                 <a className="nav-link" href="#"> <FontAwesomeIcon icon={faAddressCard} /> About Us</a>
//                             </Link></li>
//                         <li className="nav-item">
//                             <Link
//                                 activeclassName="active"
//                                 className="nav-item"
//                                 to="stat"
//                                 spy={true}
//                                 smooth={true}
//                                 offset={0}
//                                 duration={500}
//                             >
//                                 <a className="nav-link" href="#"> <FontAwesomeIcon icon={faInfinity} /> What We Do</a>
//                             </Link></li>
//
//
//                         <li className="nav-item">
//                             <Link
//                                 activeclassName="active"
//                                 className="nav-item"
//                                 to="timeline"
//                                 spy={true}
//                                 smooth={true}
//                                 offset={0}
//                                 duration={500}
//                             >
//                                 <a className="nav-link" href="#">   <FontAwesomeIcon icon={faStream} /> Timeline</a>
//                             </Link></li>
//                         <li className="nav-item">
//                             <Link
//                                 activeclassName="active"
//                                 className="nav-item"
//                                 to="newslist"
//                                 spy={true}
//                                 smooth={true}
//                                 offset={0}
//                                 duration={500}
//                             >
//                                 <a className="nav-link" href="#">  <FontAwesomeIcon icon={faNewspaper} /> Past Events</a>
//                             </Link></li>
//
//
//                         <li className="nav-item">
//                             <Link
//                                 activeclassName="active"
//                                 className="nav-item"
//                                 to="team"
//                                 spy={true}
//                                 smooth={true}
//                                 offset={0}
//                                 duration={500}
//                             >
//                                 <a className="nav-link" href="#">    <FontAwesomeIcon icon={faUserFriends} /> Team</a>
//                             </Link></li>
//                         <li className="nav-item">
//                             <Link
//                                 activeclassName="active"
//                                 className="nav-item"
//                                 to="contact"
//                                 spy={true}
//                                 smooth={true}
//                                 offset={0}
//                                 duration={500}
//                             >
//                                 <a className="nav-link" href="#">   <FontAwesomeIcon icon={faPhoneAlt} /> Contact Us</a>
//                             </Link></li>
//
//                     </ul>
//                 </div>
//             </nav>}
//         </div>
//     )
// }
//
// export default Navbar
