import React, { useState, useEffect } from "react";
import Header from "./Header";

function Profile(props) {
  const [donor, setDonor] = useState("");

  // useEffect(() => {
  //   const search = props.location.search; // returns the URL query String
  //   const params = new URLSearchParams(search);
  //   const id = params.get("id");
  //   console.log(id);

  //   return fetch(`/donor/${id}`, {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     if (response.status === 200) {
  //       console.log(response);
  //       response.json().then((data) => {
  //         console.log(data);
  //         setDonor(data);
  //       });
  //     } else {
  //       console.log("No donor is found....");
  //     }
  //   });
  // }, []);

  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Register Yourself <span className="title-under"></span>
          </h1>
          <p className="page-description">
            sign up yourself to help needy persons!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Here is Your Profile</b>{" "}
                    <span className="title-under"></span>
                  </h1>
                  <br />
                  <br />
                </div>
                <div style={{ fontFamily: "cursive" }}>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Name :</b>
                      </span>
                      {donor.donorname}
                    </label>
                    <span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        {/* <button onClick={() => setNameLoad(true)} className="button-link">Edit</button> */}
                      </lable>
                    </span>
                    <br></br>
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Password :</b>
                      </span>
                      {donor.password}
                    </label>
                    <span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        {/* <button onClick={() => setPasswordLoad(true)} className="button-link">Edit</button> */}
                      </lable>
                    </span>
                    <br />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>E-mail :</b>
                      </span>
                      {donor.email}
                    </label>
                    <span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        {/* <button onClick={() => setEmailLoad(true)} className="button-link">Edit</button> */}
                      </lable>
                    </span>
                    <br />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Address :</b>
                      </span>
                      {donor.address}
                    </label>
                    <span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        {/* <button onClick={() => setAddressLoad(true)} className="button-link">Edit</button> */}
                      </lable>
                    </span>
                    <br />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Phone Number :</b>
                      </span>
                      {donor.phoneNumber}
                    </label>
                    <span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        {/* <button onClick={() => setPhoneNumLoad(true)} className="button-link">Edit</button> */}
                      </lable>
                    </span>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
