import React, { useState } from "react";
import { Link, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import swal from "@sweetalert/with-react";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [choice, setChoice] = useState("");

  const [asDonor, setAsDonor] = useState(false);

  var [id, setId] = useState("");

  function handleAdminId(data, status) {
    console.log(status);
    if (status === 200) {
      id = data;
      localStorage.setItem("loginId", id);
      window.location.href = "/admin-dashboard";
    } else {
      swal(<div>Login Failed</div>, {
        button: true,
      });
      window.location.reload();
    }
  }

  function handleDonorId(data, status) {
    if (status === 200) {
      id = data;
      localStorage.setItem("loginId", id);
      window.location.href = "/donor-dashboard";
    } else {
      swal(<div>Login Failed</div>, {
        button: true,
      });
      window.location.reload();
    }
  }

  function login(event) {
    event.preventDefault();

    // user/login
console.log("Eamil: ",email,"password: ",password)
    if (asDonor) {
      console.log("Eamil: ",email,"password: ",password)
      axios.post("http://localhost:8000/donor/login", {
        email: email,
        password: password,
      })
      .then((response)=> {
        console.log("Response data: ",response.data);
        localStorage.setItem(
          "access_token",
          response.data.id
        );
        localStorage.setItem("donorId", response.data.id);
        localStorage.setItem("donorName", response.data.name);
        localStorage.setItem("donorEmail", response.data.email);

        window.location.href = "/donor-dashboard";
      })
      .catch(function (error) {
        console.log("Login : ", error);
        swal(<div>Invalid Credentials...</div>, {
          button: true,
        });
      });
    } 
  }

  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Sign In <span className="title-under"></span>
          </h1>
          <p className="page-description">
            Signin yourself to help needy persons!
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "0px" }}>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={login} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <br />
                  <h1>
                    <b>Sign In</b>
                    {/* <span className="title-under"></span> */}
                  </h1>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Email*"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Password*"
                    required
                  />
                  <br />
                </div>
                <div className="form-group radio">
                  <label>
                    {/* <input
                      type="radio"
                      name="asAdmin"
                      onChange={(event) => {
                        setAsAdmin(event.target.value);
                      }}
                    /> */}
                    <input
                      type="checkbox"
                      name="asDonor"
                      value="asDonor"
                      onChange={(event) => {
                        setAsDonor(true);
                      }}
                    />
                    As Donor
                  </label>
                </div>
                <div className="form-group">
                  <br />
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                  <br />
                  <br />
                </div>
                <div className="form-group">
                  <Link to="/register">
                    Don't have account ? Register yourself
                  </Link>
                  <br />
                  <br />
                  <BrowserRouter>
                    <Route path="./register"></Route>
                  </BrowserRouter>
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

export default Login;
