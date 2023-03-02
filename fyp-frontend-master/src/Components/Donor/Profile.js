import React, { useState, useEffect } from "react";
import Header from "./Header";
import Edit from "./Edit";
import axios from "axios";

function Profile() {
  const userId = localStorage.getItem("userId");
  const [donor, setDonor] = useState("");
  const [nameload, setNameLoad] = useState(false);
  const [passwordload, setPasswordLoad] = useState(false);
  const [emailload, setEmailLoad] = useState(false);
  const [addressload, setAddressLoad] = useState(false);
  const [phonenumload, setPhoneNumLoad] = useState(false);

  useEffect(() => {
    getDonorDetails();
  }, [userId]);

  console.log("----", userId);

  // 63231bccb69ba72f52c1f417
  // 63231c96b69ba72f52c1f41d
  // id 63231c96b69ba72f52c1f41d

  const getDonorDetails = () => {
    var config = {
      method: "get",
      url: `http://localhost:4000/donor/find/${userId}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <div className="div-bg-color">
      {nameload ? (
        <Edit name={donor.name} onClick={() => console.log("-==-=-=-")} />
      ) : (
        ""
      )}
      {passwordload ? <Edit name={donor.password} /> : ""}
      {emailload ? <Edit name={donor.email} /> : ""}
      {addressload ? <Edit name={donor.address} /> : ""}
      {phonenumload ? <Edit name={donor.phoneNumber} /> : ""}
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
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setNameLoad(true);
                          }}
                          className="button-link"
                        >
                          Edit
                        </button>
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
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setPasswordLoad(true);
                          }}
                          className="button-link"
                        >
                          Edit
                        </button>
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
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setEmailLoad(true);
                          }}
                          className="button-link"
                        >
                          Edit
                        </button>
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
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setAddressLoad(true);
                          }}
                          className="button-link"
                        >
                          Edit
                        </button>
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
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setPhoneNumLoad(true);
                          }}
                          className="button-link"
                        >
                          Edit
                        </button>
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
