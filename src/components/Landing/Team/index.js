import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import data from "../data/team.json";

function Member({ data }) {
  return (
    <div class="our-team">
      <div class="pic">
        <img src={"../images/team/" + data.img} alt={data.name} />
      </div>
      <div class="title-wrapper">
        <h3 class="title">{data.name}</h3>
      </div>
      <div class="post-wrapper">
        <span class="post">{data.post}</span>
      </div>
      <ul class="social">
        {data.linkedin ? (
          <li>
            <a href={data.linkedin}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        ) : null}
        {data.facebook ? (
          <li>
            <a href={data.facebook}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        ) : null}
        {data.instagram ? (
          <li>
            <a href={data.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        ) : null}
        <li>
          <a href={"mailto:" + data.email}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Team() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h3>Our Executive Committee</h3>
          <p style={{ paddingBottom: "20px" }}> Meet Our Team </p>
        </div>
        <div className="row rows-cols-5 mt-5 justify-content-center">
          <div class="col-lg-3 col-sm-6 col-6">
            <Member data={data.excom.chairperson} />
          </div>
          <div class="col-lg-3 col-sm-6 col-6">
            <Member data={data.excom.viceChairperson} />
          </div>
          <div class="col-lg-3 col-sm-6 col-6">
            <Member data={data.excom.secretary} />
          </div>
          <div class="col-lg-3 col-sm-6 col-6">
            <Member data={data.excom.treasurer} />
          </div>
        </div>
        <div className="row rows-cols-5 mt-5 justify-content-center">
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.excom.publicityCoord} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.excom.programCoord} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.excom.membershipCoord} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.excom.designMaster} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.excom.webMaster} />
          </div>
        </div>
        <div className="section-header">
          <h3>Our Director Board</h3>
          <p style={{ paddingBottom: "20px" }}> Meet Our Team </p>
        </div>
        <div className="row rows-cols-5 mt-5 justify-content-center">
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.bod.web} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.bod.program} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.bod.content} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.bod.design} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.bod.finance} />
          </div>
          <div class="col-lg-2 col-sm-6 col-6">
            <Member data={data.bod.publicRelations} />
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
  );
}

export default Team;
