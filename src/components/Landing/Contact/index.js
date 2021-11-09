import React from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
    return (

        <section id="contact">
            <div class="container container-yas">
                <div class="section-header">
                    <h3>WE ARE THE IEEE SB OF UCSC</h3>
                    <p> Come, Join us!</p>

                </div>

                <div class="form formy">
                    <div class="contact-info">
                        <h3 class="title">Let's get in touch</h3>
                        <p class="text"> Contact us with the following details.  </p>
                        <div class="info">
                            <div class="social-information"><p><FontAwesomeIcon icon={faMapMarkerAlt} /> IEEE Student Branch of UCSC,<br />&nbsp;&nbsp;&nbsp; University of Colombo School of Computing,<br />&nbsp;&nbsp;&nbsp; 35, Reid Avenue,<br />&nbsp;&nbsp;&nbsp; Colombo 7.</p>
                            </div>
                            <div class="social-information"> <p><FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:
ucscieee@gmail.com" style={{ textDecoration: 'black' }}> ucscieee@gmail.com</a></p>
                            </div>
                            <div class="social-information"><p><FontAwesomeIcon icon={faPhoneAlt} /> +94 112843687 </p>
                            </div>
                        </div>

                    </div>
                    <div class="contact-info-form"> <span class="circle one"></span> <span class="circle two"></span>

                        <h3 class="titlec">Contact us</h3>
                        <p>
                            <hr />
                            <b>Sahan Dissanayaka</b>  <br />Chairman, IEEE Student Branch of UCSC<br />
                            tsahandisaai@gmail.com<br /><hr />
                            <b>Anjana Dodampe</b> <br />Vice Chairman, IEEE Student Branch of UCSC<br />
                            ahmdodampe@ieee.org<br /><hr />
                            <b>Thenuka Weerasinghe</b> <br />Secretery, IEEE Student Branch of UCSC<br />
                            thenukaovin@gmail.com<br /><hr />
                            <b>Chanaka Wickramasinghe</b> <br />Treasurer, IEEE Student Branch of UCSC<br />
                            cmwickramasinghe703@gmail.com<br /><hr />

                        </p>
                    </div>
                </div>
            </div >
        </section>


    )
}

export default ContactUs
