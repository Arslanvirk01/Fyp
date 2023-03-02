import React, { useState } from "react";
import Header from "./Header";
import "react-phone-number-input/style.css";
import swal from "@sweetalert/with-react";
import PhoneInput from "react-phone-number-input";
import axios from "axios";



function Register() {
  const [requesterName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhonenum] = useState("");
  const [isRequester, setIsRequester] = useState(false);


  function register(event) {
    event.preventDefault();
    if(isRequester)
    {
      console.log(requesterName,password,address,phoneNumber,email)
      axios.post("http://localhost:8000/create/requester", {
        requesterName: requesterName,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
      }).then((response)=> {
        console.log("Response data: ",response.data);
        alert("Requester User Registered Successfully")
        window.location.href = "/loginRequester";})
      // .then((response)=>{
      //   // console.log(donorname,password,phoneNumber,address,email)
      //   console.log("Register response : ", response.data);
      //   // swal(<div>Registered Successfully</div>, {
      //   //   button: true,
      //   // });
      //   alert("Donor User Registered Successfully")
      //   window.location.href = "/loginDoner";
      // })
      .catch(function (error) {
        console.log("Register response : ", error);
        swal(<div>This User already exist - Try Again</div>, {
          button: true,
        });
      });

    }
    

    // return fetch("/donor", {
    //   method: "post",
    //   body: JSON.stringify(donor),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => {
    //   if (res.status === 400) {
    //     swal(<div>Successfully Registered</div>, {
    //       button: true,
    //     });
    //     window.location.reload();
    //     window.location.href = "/login";
    //   } else if (res.status === 500) {
    //     console.log(res);
    //   }
    // });
  }

  return (
    <div className="div-bg-color">
      <Header />
      {/* <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Register Yourself <span className="title-under"></span>
          </h1>
          <p className="page-description">
            sign up yourself to help needy persons!
          </p>
        </div>
      </div> */}

      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={register} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Register Yourself</b>{" "}
                    {/* <span className="title-under"></span> */}
                  </h1>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter your name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Password*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Email*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Address*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="phoneNumber"
                    onChange={(event) => {
                      setPhonenum(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Phone Number*"
                    required
                  />
                </div>
                <label>
                  <input
                    type="checkbox"
                    name="asRequester"
                    value="asRequester"
                    onChange={(event) => {
                        setIsRequester(!isRequester);
                    }}
                  />
                  As Requester
                </label>
                <br />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  <br />
                  <br />
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

export default Register;
