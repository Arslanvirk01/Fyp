import React, { useState } from 'react';
import Header from './Header';

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    

    const submitContact = (e) =>{
        e.preventDefault();
    }



    return(
        <div className="div-bg-color">
            <Header/>
            <div className="page-heading text-center">
                <div className="container zoomIn animated">
                    <h1 className="page-title">CONTACT US 
                    {/* <span className="title-under"></span> */}
                    </h1>
                    <p className="page-description">
                        Contact us to help needy persons!
                    </p>
                </div>
            </div>


            <div className="main-container fadeIn animated">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12 col-form">
                            <h2 className="title-style-2">CONTACT FORM <span className="title-under"></span></h2>
                            <form onSubmit={submitContact} className="contact-form ajax-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input  type="text" name="name" className="form-control" placeholder="Name*" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" name="email" className="form-control" placeholder="E-mail*" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" rows="5" className="form-control" placeholder="Message*" required></textarea>
                                </div>
                                {/* <div className="form-group alerts">
                                    <div className="alert alert-success" role="alert">
                                    </div>
                                    <div className="alert alert-danger" role="alert">
                                    </div>
                                </div>	 */}
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary pull-right">Send message</button>
                                </div>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                        <div className="col-md-4 col-md-offset-1 col-contact">
                            <h2 className="title-style-2"> CONTACTS <span className="title-under"></span></h2>
                            <p>
                                <b>Hi! </b>You can contact us here.
                            </p>
                            <div className="contact-items">
                                <ul className="list-unstyled contact-items-list">
                                    <li className="contact-item"> <span className="contact-icon"> <i className="fa fa-phone"></i></span> +(92) 3046868277 </li>
                                    <li className="contact-item"> <span className="contact-icon"> <i className="fa fa-envelope"></i></span>  18-NTU-CS-1081@student.ntu.edu.pk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;