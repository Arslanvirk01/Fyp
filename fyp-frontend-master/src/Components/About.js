import React, { Component } from "react";
import Header from "./Header";
import Reason from "./Reason";

// import swal from "@sweetalert/with-react";
// swal(<div>Medicine</div>, {
//   button: true,
// });

function About() {



  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            ABOUT US 
            {/* <span className="title-under"></span> */}
          </h1>
          <p className="page-description">This is to help needy persons!</p>
        </div>
      </div>

      <div className="main-container">
        <div className="container">
          <div className="row  fadeIn animated">
            <div className="col-md-6">
              <img
                src="assets/images/about-us.jpg"
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="col-md-6">
              <h2 className="title-style-2">
                ABOUT <span className="title-under"></span>
              </h2>
              <p>
                Technology plays a dominant role in our lives. Technology make
                people up to date. We as a team making web application “Online
                Medicine Donation Portal”.
              </p>
              <p>
                This is user friendly website for NGO’s who want to make their
                donation system technology based, so they can easily manage all
                affairs related to the donation and to provide medicines to
                needy people. This deliverable is all about use case modeling
                and software design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Reason /> */}
    </div>
  );
}

export default About;
