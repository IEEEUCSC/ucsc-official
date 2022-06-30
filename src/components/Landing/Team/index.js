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
import data from "../../../data/team.json";

function Member({ data }) {
  const firstName = data.name.split(" ")[0] || "";
  return (
    <div className="our-team">
      <div className="pic">
        <img src={"../images/team/" + data.img} alt={data.name} />
      </div>
      <div className="title-wrapper">
        <h3 className="title">{data.name}</h3>
      </div>
      <div className="post-wrapper">
        <span className="post">{data.post}</span>
      </div>
      <ul className="social">
        {data.linkedin ? (
          <li>
            <a href={data.linkedin} title={firstName + "'s LinkedIn"}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        ) : null}
        {data.facebook ? (
          <li>
            <a href={data.facebook} title={firstName + "'s Facebook"}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        ) : null}
        {data.instagram ? (
          <li>
            <a href={data.instagram} title={firstName + "'s Instagram"}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        ) : null}
        <li>
          <a href={"mailto:" + data.email} title={firstName + "'s email"}>
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
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-3 col-6">
            <Member data={data.excom.chairperson} />
          </div>
          <div className="col-lg-3 col-6">
            <Member data={data.excom.viceChairperson} />
          </div>
          <div className="col-lg-3 col-6">
            <Member data={data.excom.secretary} />
          </div>
          <div className="col-lg-3 col-6">
            <Member data={data.excom.treasurer} />
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-3 col-6">
            <Member data={data.excom.publicityCoord} />
          </div>
          <div className="col-lg-3 offset-lg-1 col-6">
            <Member data={data.excom.programCoord} />
          </div>
          <div className="col-lg-3 offset-lg-1 col-6">
            <Member data={data.excom.membershipCoord} />
          </div>
          <div className="col-lg-3 col-6">
            <Member data={data.excom.designMaster} />
          </div>
          <div className="col-lg-3 offset-lg-1 col-6">
            <Member data={data.excom.webMaster} />
          </div>
        </div>
        <div className="section-header">
          <h3>Our Director Board</h3>
          <p style={{ paddingBottom: "20px" }}> Meet Our Team </p>
        </div>
        <div className="row rows-cols-5 mt-5 justify-content-center">
          <div className="col-lg-3 col-sm-6 col-6">
            <Member data={data.bod.web} />
          </div>
          <div className="col-lg-3 col-sm-6 col-6">
            <Member data={data.bod.program} />
          </div>
          <div className="col-lg-3 col-sm-6 col-6">
            <Member data={data.bod.content} />
          </div>
          <div className="col-lg-3 col-sm-6 col-6">
            <Member data={data.bod.design} />
          </div>
          <div className="col-lg-3 col-sm-6 col-6">
            <Member data={data.bod.finance} />
          </div>
          <div className="col-lg-3 col-sm-6 col-6">
            <Member data={data.bod.publicRelations} />
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="section-header">
        <h3>Our Team Leaders</h3>
            <p> Meet Our Team </p>
           
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp" style={{visibility:"visible",animationName:"fadeInUp"}}>
                <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454811/team-1.jpg" className="img-fluid" alt=""></img>
                    <div className="member-info">
                        <div className="member-info-content">
                            <h4>Walt Hannis</h4> <span>Chief Executive Officer</span>
                            <div className="social"> <a href=""><i className="fa fa-twitter"></i></a> <a href=""><i className="fa fa-facebook"></i></a> <a href=""><i className="fa fa-google-plus"></i></a> <a href=""><i className="fa fa-linkedin"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility:"visible",animationName:"fadeInUp",animationDelay:"0.1s"}}>
                <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454840/team-2.jpg" className="img-fluid" alt=""></img>
                    <div className="member-info">
                        <div className="member-info-content">
                            <h4>Namia Sarah</h4> <span>Project Manager</span>
                            <div className="social"> <a href=""><i className="fa fa-twitter"></i></a> <a href=""><i className="fa fa-facebook"></i></a> <a href=""><i className="fa fa-google-plus"></i></a> <a href=""><i className="fa fa-linkedin"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s" style={{visibility:"visible",animationName:"fadeInUp",animationDelay:"0.2s"}}>
                <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454870/team-3.jpg" className="img-fluid" alt=""></img>
                    <div className="member-info">
                        <div className="member-info-content">
                            <h4>Jammy Anderson</h4> <span>CTO</span>
                            <div className="social"> <a href=""><i className="fa fa-twitter"></i></a> <a href=""><i className="fa fa-facebook"></i></a> <a href=""><i className="fa fa-google-plus"></i></a> <a href=""><i className="fa fa-linkedin"></i></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility:"visible",animationName:"fadeInUp",animationDelay:"0.3s"}}>
                <div className="member"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559454900/team-4.jpg" className="img-fluid" alt=""></img>
                    <div className="member-info">
                        <div className="member-info-content">
                            <h4>Jepson Sinah</h4> <span>Developer</span>
                            <div className="social"> <a href=""><i className="fa fa-twitter"></i></a> <a href=""><i className="fa fa-facebook"></i></a> <a href=""><i className="fa fa-google-plus"></i></a> <a href=""><i className="fa fa-linkedin"></i></a> </div>
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
