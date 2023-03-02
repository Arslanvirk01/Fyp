import React, { useState } from "react";
import Header from "./Header";
import swal from "@sweetalert/with-react";
import axios from "axios";

function RequestMedicine() {
  const token = localStorage.getItem("requesterID");
  const requesterID = localStorage.getItem("requesterID");
  const [patientname, setPatientname] = useState("");
  const [disease, setDisease] = useState("");
  const [medname, setMedname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [profession, setProfession] = useState("");
  var [critical, setCritical] = useState(false);
  const [mg, setMg] = useState("");

  const requestMedicine = (event) => {
    event.preventDefault();

    if (!token) {
      document.getElementById('error').innerText="Please Login to your account first";
      // alert("Please Login to your account first");
    } else if (
      !patientname.length ||
      !disease.length ||
      !medname.length ||
      !quantity.length ||
      !phoneNumber.length ||
      !age.length ||
      !income.length ||
      // !CNIC.length ||
      !profession.length ||
      !mg.length
    ) {
      alert("Please fill all fields");
    } else {
      console.log(requesterID,patientname,disease,medname,mg,quantity,phoneNumber,gender,age,critical,income,CNIC,profession)
      axios.post("http://localhost:8000/patient", {
          requesterID:requesterID,
          patientname: patientname,
          disease: disease,
          medname: medname,
          mg: mg,
          quantity: quantity,
          phoneNumber: phoneNumber,
          gender: gender,
          age: age,
          critical:critical,
          income: income,
          CNIC: CNIC,
          profession: profession,
        })
        .then((response)=> {
          console.log("Requested Successfully : ", response.data);
          alert("Requested Successfully : ")
         window.location.href = "/requester-dashboard";
        })
        .catch(function (error) {
          console.log("Error In Requesting - Try Again : ", error);
          swal(<div>Error In Requesting - Try Again</div>, {
            button: true,
          });
        });
    }
  };

  return (
    <div className="div-bg-color">
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Request Medicine Here
            <span className="title-under"></span>
          </h1>
          <p className="page-description">We are here to help you!</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form className="form-box footer-form">
              <div className="form-group text-center mt-5">
                <div className="form-group">
                  <h1>
                    <b>Request Medicines</b>{" "}
                    {/* <span className="title-under"></span> */}
                  </h1>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="patientname"
                    onChange={(event) => {
                      setPatientname(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Patient Name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="disease"
                    onChange={(event) => {
                      setDisease(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Disease*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="medname"
                    onChange={(event) => {
                      setMedname(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Medicine Name*"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    // type="number"
                    name="quantity"
                    onChange={(event) => {
                      setMg(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Mg"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    // type="number"
                    name="quantity"
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Quantity"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="phoneNumber"
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <lable>
                    <select
                      className="form-control"
                      onChange={(event) => {
                        setGender(event.target.value);
                      }}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Not prefer to say">
                        Not prefer to say
                      </option>
                    </select>
                  </lable>
                  {/* <input
                    type="text"
                    name="gender"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Gender"
                    required
                  /> */}
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Age"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="income"
                    onChange={(event) => {
                      setIncome(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Income"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="CNIC"
                    onChange={(event) => {
                      setCNIC(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter CNIC"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="profession"
                    onChange={(event) => {
                      setProfession(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Profession"
                    required
                  />
                </div>
                <div className="form-group" style={{ margin: 20 }}>
                  <lable>
                    <input
                      type="checkbox"
                      name="critical"
                      onChange={(event) => {
                        setCritical(true);
                      }}
                      className="form-control"
                    />
                    Critical
                  </lable>
                </div>
                <label for="img">Select image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  style={{ margin: 20 }}
                />
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => requestMedicine(e)}
                  >
                    Request
                  </button>
                  <h1 id="error"></h1>
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

export default RequestMedicine;
