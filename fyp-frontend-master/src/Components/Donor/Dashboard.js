import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Dashboard() {
  var id;
  let [donations, setDonations] = useState([]);

  useEffect(() => {
    id = localStorage.getItem("donorId");
    console.log(id);

    return fetch(`http://localhost:8000/donation/${id}`, {
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
          setDonations(data);
          // console.log("donation ka data");
          // console.log(donations);
        });
      }
    });
    //setDonations(data);
    //console.log(donations);
  }, []);

  function donateNow() {
    window.location.href = "/donate";
  }
  return (
    <div>
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <button
            onClick={donateNow}
            className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
            data-toggle="modal"
            data-target="#donateModal"
          >
            DONATE NOW
          </button>
          <h1 className="page-title">
            Donate Medicine to Help Needy Persons{" "}
            <span className="title-under"></span>
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <Table className="styled-table" style={{ marginLeft: "150px" }}>
            <Thead>
              <Tr>
                <Th>Donor Name</Th>
                <Th>Medicine Name</Th>
                <Th>Medicine Mg</Th>
                <Th>Medicine Quantity</Th>
                <Th>ExpiryDate</Th>
                <Th>Donation-Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {donations.map((donation) => (
                <Tr>
                  <Td>{donation.donorName}</Td>
                  <Td>{donation.medname}</Td>
                  <Td>{donation.mg}</Td>
                  <Td>{donation.quantity}</Td>
                  <Td>{donation.expiryDate}</Td>
                  <Td>{donation.donationDate}</Td>
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
