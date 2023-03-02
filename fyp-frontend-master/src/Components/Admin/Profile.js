import React, { useState, useEffect } from "react";
import Header from "./Header";
import Edit from "./Edit";

function Profile() {
  var id;
  const [admin, setAdmin] = useState("");
  const [nameload, setNameLoad] = useState(false);
  const [passwordload, setPasswordLoad] = useState(false);
  const [emailload, setEmailLoad] = useState(false);
  const [phonenumload, setPhoneNumLoad] = useState(false);

  useEffect(() => {
    id = localStorage.getItem("loginId");
    console.log(id);

    return fetch(`http://localhost:8000/administrator/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.status)
      try
      {
        if (response.status === 200) {
          console.log(response);
          response.json().then((data) => {
            console.log(data);
            setAdmin(data);
          });
        }
        else
        {
          console.log(response.status)
        }
       }
      catch(err) {
        console.log(response.status);
        console.log(err);
        console.log("No admin is found....");
    }
    });
  }, []);


  return (
    <div className="div-bg-color">
      <Header />
      {nameload ? <Edit name={admin.username}/> : ""}
      {passwordload ? <Edit name={admin.password}/> : ""}
      {emailload ? <Edit name={admin.email}/> : ""}
      {phonenumload ? <Edit name={admin.phoneNumber}/> : ""}
      {console.log(admin)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            PROFILE <span className="title-under"></span>
          </h1>
          <p className="page-description">welcome to your profile!</p>
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
                <div style={{fontFamily:"cursive"}}>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Name :</b>
                      </span>
                      {admin.username}
                    </label>
                    <span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        <button onClick={() => setNameLoad(true)} className="button-link">Edit</button>
                      </lable>
                    </span>
                    <br></br>
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Password :</b>
                      </span>
                      {admin.password}
                    </label>
                    <span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        <button onClick={() => setPasswordLoad(true)} className="button-link">Edit</button>
                      </lable>
                    </span>
                    <br />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>E-mail :</b>
                      </span>
                      {admin.email}
                    </label><span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        <button onClick={() => setEmailLoad(true)} className="button-link">Edit</button>
                      </lable>
                      </span>
                    <br />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label>
                      <span style={{ color: "black" }}>
                        <b>Phone Number :</b>
                      </span>
                      {admin.phoneNumber}
                    </label><span
                      style={{
                        float: "right",
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      <lable>
                        <button onClick={() => setPhoneNumLoad(true)} className="button-link">Edit</button>
                      </lable>
                    </span>
                    <br />
                    <br/>
                    <br/>
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
