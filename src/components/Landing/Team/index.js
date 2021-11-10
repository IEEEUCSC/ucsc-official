import React from 'react'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Team() {

    return (
        <section>
            <div className="container">
                <div className="section-header">
                    <h3>Our Executive Committee</h3>
                    <p style={{paddingBottom: "20px"}}> Meet Our Team </p>
                </div>
                <div className="row rows-cols-5 mt-5 justify-content-center">
                    <div class="col-md-3 col-sm-6 col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Sahan.jpg"/>
                            </div>
                            <h3 class="title">Sahan Dissanayaka</h3>
                            <span class="post">Chairman</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/sahan-dissanayaka-3099b9191/"><FontAwesomeIcon
                                    icon={faLinkedinIn}/></a></li>
                                <li><a href="https://www.facebook.com/sahan.dissanayaka.71"><FontAwesomeIcon
                                    icon={faFacebookF}/></a></li>
                                <li><a href="mailto:tsahandisaai@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Anjana.jpg"/>
                            </div>
                            <h3 class="title">Anjana Dodampe</h3>
                            <span class="post">Vice Chairman</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/anjanadodampe"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/IManjanadodampe"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/anjana_hd/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:ahmdodampe@ieee.org"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Thenuka.jpg"/>
                            </div>
                            <h3 class="title">Thenuka Weerasinghe</h3>
                            <span class="post">Secretary</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/thenuka-ovin-55a721199/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/thenuka.ovin"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/ov1.n/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:thenukaovin@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Chanaka.jpg"/>
                            </div>
                            <h3 class="title">Chanaka Wickramasinghe</h3>
                            <span class="post">Treasurer</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/chanakawick/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/cwickramasinghe"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/_mr.chaw/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:cmwickramasinghe703@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>        
                </div>
                <div className="row rows-cols-5 mt-5 justify-content-center">
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Akila.jpg"/>
                            </div>
                            <h3 class="title">Akila Maithripala</h3>
                            <span class="post">Design Master</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/akilamaithri"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/akila.my3"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/akila_maithripala"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:akilamaithripala@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Yasith.jpg"/>
                            </div>
                            <h3 class="title">Yasith Samaradivakara</h3>
                            <span class="post">Web Master</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/yasith-samaradivakara-a2b72919b/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="mailto:yasith.sam7@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Dinithi.jpg"/>
                            </div>
                            <h3 class="title">Dinithi Gimhara</h3>
                            <span class="post">Coordinator</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/dinithi-bandara-587b281a4/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/dini.gimhara.12"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="mailto:dinithigimhara@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Thisari.jpg"/>
                            </div>
                            <h3 class="title">Thisari Gunawardena</h3>
                            <span class="post">Coordinator</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/thisarigunawardena/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/thisari.gunawardena/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/_thisari_99_/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:thisarigun99@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Dulaj.jpg"/>
                            </div>
                            <h3 class="title">Dulaj Prabhasha</h3>
                            <span class="post">Coordinator</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/dulaj-prabasha-007/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.instagram.com/adow_dulaj"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="mailto:shad3s.of.m3@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section-header">
                    <h3>Our Director Board</h3>
                    <p style={{ paddingBottom: "20px" }}> Meet Our Team </p>
                </div>
                <div className="row rows-cols-6 mt-5 justify-content-center">
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Dhanika.jpg"/>
                            </div>
                            <h3 class="title">Pinsara Dhanika</h3>
                            <span class="post">Director of Finance</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/pinsara-dhanika-43a78b1a5"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/pinsara.dhanika"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="mailto:pinsaradhanika@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Ravin.jpg"/>
                            </div>
                            <h3 class="title">Ravin Perera</h3>
                            <span class="post">Director of Program</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/ravin-perera-b3ba551a4"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/ravin.perera.7923"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="mailto:bravinperera@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Isuru.jpg"/>
                            </div>
                            <h3 class="title">Isuru Harischandra</h3>
                            <span class="post">Director of PR</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/isuru-harischandra-9b09081a4/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="mailto:isuruvihan@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Kalsha.jpg"/>
                            </div>
                            <h3 class="title">Kalsha Samarajeewa</h3>
                            <span class="post">Director of Design</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/mwlite/in/kalsha-samarajeewa"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/kalsha.sam"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/yaiya_sam/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:kalsha.sam26@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Asela.jpg"/>
                            </div>
                            <h3 class="title">Asela Pathirage</h3>
                            <span class="post">Director of Web</span>
                            <ul class="social">
                                <li><a href="https://www.linkedin.com/in/asela-pathirage-719b261a4/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/asela.pathirage"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/_aseladp_/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:aselapathirage@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-6">
                        <div class="our-team">
                            <div class="pic">
                                <img src="./images/team/Yadeesha.jpg"/>
                            </div>
                            <h3 class="title">Yadeesha Weerasinghe</h3>
                            <span class="post">Director of Content</span>
                            <ul class="social">
                                <li><a href="http://www.linkedin.com/in/yadeesha-weerasinghe-284936211"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.facebook.com/yadeesha.weerasinghe.9"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="https://www.instagram.com/yadeeshaa/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="mailto:yadeeshaw@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="container">
        <div class="section-header">
        <h3>Our Team Leaders</h3>
            <p> Meet Our Team </p>
           
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 wow fadeInUp" style={{visibility:"visible",animationName:"fadeInUp"}}>
                <div class="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454811/team-1.jpg" class="img-fluid" alt=""></img>
                    <div class="member-info">
                        <div class="member-info-content">
                            <h4>Walt Hannis</h4> <span>Chief Executive Officer</span>
                            <div class="social"> <a href=""><i class="fa fa-twitter"></i></a> <a href=""><i class="fa fa-facebook"></i></a> <a href=""><i class="fa fa-google-plus"></i></a> <a href=""><i class="fa fa-linkedin"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility:"visible",animationName:"fadeInUp",animationDelay:"0.1s"}}>
                <div class="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454840/team-2.jpg" class="img-fluid" alt=""></img>
                    <div class="member-info">
                        <div class="member-info-content">
                            <h4>Namia Sarah</h4> <span>Project Manager</span>
                            <div class="social"> <a href=""><i class="fa fa-twitter"></i></a> <a href=""><i class="fa fa-facebook"></i></a> <a href=""><i class="fa fa-google-plus"></i></a> <a href=""><i class="fa fa-linkedin"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s" style={{visibility:"visible",animationName:"fadeInUp",animationDelay:"0.2s"}}>
                <div class="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454870/team-3.jpg" class="img-fluid" alt=""></img>
                    <div class="member-info">
                        <div class="member-info-content">
                            <h4>Jammy Anderson</h4> <span>CTO</span>
                            <div class="social"> <a href=""><i class="fa fa-twitter"></i></a> <a href=""><i class="fa fa-facebook"></i></a> <a href=""><i class="fa fa-google-plus"></i></a> <a href=""><i class="fa fa-linkedin"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility:"visible",animationName:"fadeInUp",animationDelay:"0.3s"}}>
                <div class="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454900/team-4.jpg" class="img-fluid" alt=""></img>
                    <div class="member-info">
                        <div class="member-info-content">
                            <h4>Jepson Sinah</h4> <span>Developer</span>
                            <div class="social"> <a href=""><i class="fa fa-twitter"></i></a> <a href=""><i class="fa fa-facebook"></i></a> <a href=""><i class="fa fa-google-plus"></i></a> <a href=""><i class="fa fa-linkedin"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div> */}
        </section>
    )
}

export default Team
