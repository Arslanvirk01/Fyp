import React from "react";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import swal from "@sweetalert/with-react";

function Header() {
  const isLogin = localStorage.getItem("access_token");
  const signOut = () => {
    // localStorage.removeItem("access_token");
    // swal(<div>Log Successfully</div>, {
    //   button: true,
    // })
  };
  return (
    <div className="page">
      <header className="main-header page">
        <nav className="navbar navbar-static-top">
          <div className="navbar-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <ul className="list-unstyled list-inline header-contact">
                    <li>
                      {" "}
                      <i className="fa fa-phone"></i>{" "}
                      <a href="tel:">+92 304 4700561 </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="fa fa-envelope"></i>{" "}
                      <a href="mailto:18-NTU-CS-1081@student.ntu.edu.pk">
                        18-NTU-CS-1081@student.ntu.edu.pk
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-xs-12 text-right">
                  <ul className="list-unstyled list-inline header-social">
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-facebook"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-twitter"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-google"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-youtube"></i>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa fa-pinterest-p"></i>{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-main">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img alt="" />
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="./">HOME</Link>
                  </li>
                  {/* <li>
                    <Link to="/donor-profile">PROFILE</Link>
                  </li> */}
                  <li className="has-child">
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                  {/* <li>
                    <Link to="/register">Sign Up</Link>
                  </li> */}
                  {isLogin ? (
                    <li>
                      <Link>
                        <div 
                          onClick={() => 
                          {
                            localStorage.clear();
                            signOut()
                            window.location.href = "/";
                          }}
                          style={{ textDecoration: "none" }}
                        >
                          SIGN OUT
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login">Admin</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

// {/* <BrowserRouter>
// <Switch>
//   <Route exact path="./">
//     <Home />
//   </Route>
//   {/* <Route exact path="./medicine">
//     <Medicine />
//   </Route> */}
//   <Route path="./about">
//     <About />
//   </Route>
//   {/* <Route path="./login">
//     <Login />
//   </Route>
//   <Route path="./register">
//     <Register/>
//   </Route> */}
//   <Route path="./contact">
//     <Contact />
//   </Route>
// </Switch>
// </BrowserRouter> */}
