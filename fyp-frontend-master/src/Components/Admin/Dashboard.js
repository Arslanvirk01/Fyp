import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import swal from "@sweetalert/with-react";
import MedicineTable from "../MedicineTable";
import axios from "axios";

function Dashboard() {
  // function HandleCritical(critical) {
  //   if (critical === true) {
  //     critical = "yes";
  //   } else {
  //     critical = "no";
  //   }
  //   return critical;
  // }

  function Accept(id) {
    console.log(id);
    // return fetch(`http://localhost:8000/accept/${id}`, {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   console.log(response.status);
    //   if (response.status === 200) {
    //     console.log("Accepted....");
    //   } else {
    //     swal(<div>Medicine Not Present in Stock</div>, {
    //       button: true,
    //     });
    //   }
    // });
  }

  function Reject(id) {
    console.log(id);
    // return fetch(`http://localhost:8000/reject/${id}`, {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   console.log(response.status);
    //   if (response.status === 500) {
    //     console.log("Medicine does not exists....");
    //   } else if (response.status === 200) {
    //     console.log("Rejected....");
    //   }
    // });
  }

  let [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {
    axios
      .get("http://localhost:8000/patient")
      .then(function (response) {
        setRequests(response.data);
      })
      .catch(function (error) {
        console.log("Patient Data Error : ", error);
      });
  };

  const rejectRequest = (e, id) => {
    e.preventDefault();

    const config = {
      method: "delete",
      url: `http://localhost:4000/patient/delete/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getRequests();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      {console.log("requests")}
      {console.log(requests)}
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Requests of Needy Perons
            {/* <span className="title-under"></span> */}
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <div>
            <Table className="styled-table" style={{ marginLeft: "60px" }}>
              <Thead>
                <Tr>
                  <Th>PatientName</Th>
                  <Th>Age</Th>
                  {/* <Th>Gender</Th> */}
                  <Th>Profession</Th>
                  <Th>Diesease</Th>
                  <Th>MedcineName</Th>
                  <Th>MedicineMg</Th>
                  <Th>CNIC</Th>
                  <Th>Income</Th>
                  <Th>Status</Th>
                  {/* <Th>Critical</Th> */}
                  {/* <Th></Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {requests.map((requests) => (
                  <Tr>
                    <Td>{requests.patientname}</Td>
                    <Td>{requests.age}</Td>
                    {/* <Td>{r.gender}</Td> */}
                    <Td>{requests.profession}</Td>
                    <Td>{requests.disease}</Td>
                    <Td>{requests.medname}</Td>
                    <Td>{requests.mg}</Td>
                    <Td>{requests.CNIC}</Td>
                    <Td>{requests.income}</Td>
                    <Td>
                      <div
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <button>Accept</button>
                        <button onClick={(e) => rejectRequest(e, requests._id)}>
                          Reject
                        </button>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
