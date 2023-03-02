import React, { Component, useState } from "react";
import Header from "./Header";
// import Header from "../Header";
import swal from "@sweetalert/with-react";
import axios from "axios";

function Donate() {
  const token = localStorage.getItem("access_token");
  const donorName = localStorage.getItem("donorName");
  const donorId = localStorage.getItem("donorId");
  const [expiryDate, setexpiryDate] = useState("");
  const [medname, setMedname] = useState("");
  const [mg, setMg] = useState("");
  const [quantity, setQuantity] = useState("");
  var id;

  function donated(data) {
    // if (data !== null) {
    //   console.log("successfully donated")
    //   swal(
    //     <div>
    //       <div>
    //       Donated <b>Successfully</b>
    //     </div>
    //     </div>
    //     )
    //     window.location.reload();
    // }
  }

  function donate(event) {
    event.preventDefault();

    if (!token) {
      alert("Please Login to your account first");
    } else {
      axios
        .post(`http://localhost:8000/donation/${donorId}`, {
          donorName: donorName,
          medname: medname,
          mg: mg,
          quantity: quantity,
          expiryDate:expiryDate
        })
        .then((response)=>{
          console.log("Donated response : ", response);
          // swal(<div>Donated Successfully</div>, {
          //   button: true,
          // });
          alert("Donated Successfully")
          window.location.href = "/donor-dashboard";
        })
        .catch(function (error) {
          console.log("Donated response : ", error);
          swal(<div>Error In Donating - Try Again</div>, {
            button: true,
          });
        });
    }
  }

  return (
    <div className="div-bg-color">
      <Header />
      {/* <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Donate <span className="title-under"></span>
          </h1>
          <p className="page-description">Donate to help others!</p>
        </div>
      </div> */}

      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={donate} className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <h1>
                    <b>Donate Medicine</b>
                    {/* <span className="title-under"></span> */}
                  </h1>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="medname"
                    onChange={(event) => {
                      setMedname(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Medicine Name"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="mg"
                    onChange={(event) => {
                      setMg(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Medicine Mg"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="quantity"
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Quantity"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="expirydate"
                    onChange={(event) => {
                      setexpiryDate(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Expiry Date"
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Donate
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

export default Donate;
