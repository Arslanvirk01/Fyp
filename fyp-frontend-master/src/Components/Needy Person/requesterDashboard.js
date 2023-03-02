import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Dashboard() {
  var id;
  let [requests, setRequests] = useState([]);

  useEffect(() => {
    id = localStorage.getItem("requesterID");
    console.log(id);

    return fetch(`http://localhost:8000/patient/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 404) {
        console.log("No donation is found....");
      } else {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          setRequests(data);
          // console.log("donation ka data");
          // console.log(donations);
        });
      }
    });
    //setDonations(data);
    //console.log(donations);
  }, []);

  function requestNow() {
    window.location.href = "/requestform";
  }
  return (
    <div>
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <button
            onClick={requestNow}
            className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
            data-toggle="modal"
            data-target="#donateModal"
          >
            REQUEST NOW
          </button>
          <h1 className="page-title">
            We are here for help Needy Persons{" "}
            <span className="title-under"></span>
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <Table className="styled-table" style={{ marginLeft: "380px" }}>
            <Thead>
              <Tr>
                <Th>Medicie Name</Th>
                <Th>Medicine Mg</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {requests.map((requests) => (
                <Tr>
                  <Td>{requests.medname}</Td>
                  <Td>{requests.mg}</Td>
                  <Td>{requests.quantity}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
