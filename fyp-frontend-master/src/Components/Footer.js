import React from 'react';

function FooterComponent(){
    return(
        <div>
            <footer className="main-footer">
                <div className="footer-top">
                </div>
                <div className="footer-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <div className="footer-col">
                                    <h4 className="footer-title">About us <span className="title-under"></span></h4>
                                    <div className="footer-content">
                                    <p>
                                        Technology plays a dominant role in our lives. Technology make people up to date. We as a team making web application “Online Medicine Donation Portal”.
                                    </p>
                                    <p>
                                        This is user friendly website for NGO’s who want to make their donation system technology based, so they can easily manage all affairs related to the donation and to provide medicines to needy people. This deliverable is all about use case modeling and software design. 
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <div className="footer-col">
                                    <h4 className="footer-title">Contact us <span className="title-under"></span></h4>
                                    <div className="footer-content">
                                        <div className="footer-form">
                                            <div className="footer-form" >
                                            <form action="php/mail.php" className="ajax-form">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" placeholder="Name" required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" placeholder="E-mail" required/>
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" placeholder="Message" required></textarea>
                                                </div>
                                                <div className="form-group alerts">
                                                    <div className="alert alert-success" role="alert">
                                                    </div>
                                                    <div className="alert alert-danger" role="alert">
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-submit pull-right">Send message</button>
                                                </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container text-right">
                        @ copyrights 2021
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterComponent;