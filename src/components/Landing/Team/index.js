import React from 'react'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Team() {

    return (
        <section id="team">
            <div className="container">
                <div className="section-header">
                    <h3>Our Executive Committee</h3>
                    <p style={{ paddingBottom: "20px" }}> Meet Our Team </p>

                </div>

                <div className="row ml-2 mr-2">
                    <div className="col-sm-3 col-6 fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454811/team-1.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Walt Hannis</h4> <span>Chief Executive Officer</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6 fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationName: "fadeInUp", animationDelay: "0.1s" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454840/team-2.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Namia Sarah</h4> <span>Project Manager</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6 fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationName: "fadeInUp", animationDelay: "0.2s" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454870/team-3.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Jammy Anderson</h4> <span>CTO</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-6 fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationName: "fadeInUp", animationDelay: "0.3s" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454900/team-4.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Jepson Sinah</h4> <span>Developer</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row rows-cols-5 mt-5 justify-content-center">
                    <div className="col-sm col-4 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454811/team-1.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Walt Hannis</h4> <span>Chief Executive Officer</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-4 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationName: "fadeInUp", animationDelay: "0.1s" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454840/team-2.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Namia Sarah</h4> <span>Project Manager</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-4 wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationName: "fadeInUp", animationDelay: "0.2s" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454870/team-3.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Jammy Anderson</h4> <span>CTO</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-4 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationName: "fadeInUp", animationDelay: "0.3s" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454900/team-4.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Yasith Samaradivakara</h4> <span>Developer</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-4 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationName: "fadeInUp", animationDelay: "0.3s" }}>
                        <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454900/team-4.jpg" className="img-fluid" alt=""></img>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Jepson Sinah</h4> <span>Developer</span>
                                    <div className="social"> <a href="https://"><FontAwesomeIcon icon={faLinkedinIn} /></a> </div>
                                </div>
                            </div>
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
