import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import MedicineTable from "../MedicineTable";
import EditDonor from "./EditDonor";
import swal from "@sweetalert/with-react";
import axios from "axios";

function AllDonors() {
  let [donors, setDonors] = useState([]);
  let [load, setLoad] = useState(false);
  let [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/donation")
      .then(function (response) {
        console.log("Donor Data : ", response);
        console.log("Donor Data sldk : ", response.data);
        setDonors(response.data);
      })
      .catch(function (error) {
        console.log("Donor Data Error : ", error);
      });
  }, []);

  function DeleteDonor(id) {
    // return fetch(`http://localhost:8000/donor/${id}`, {
    //   method: "delete",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   if (response.status === 200) {
    //     return(
    //       swal(
    //         <div>Successfully Deleted</div>,{
    //         button:true,}
    //         ).then(function(){window.location.reload();})
    //     )
    //   } else {
    //     return(
    //       swal(
    //         <div>Issue Occured</div>,{
    //         button:true,}
    //         )
    //     )
    //   }
    // });
  }

  // function edit(){
  //   window.location.href = `/edit-donor`;
  // }

  return (
    <div>
      <Header />
      <div className="page-heading text-center">
        <div className="container zoomIn animated">
          <h1 className="page-title">
            Donors List
            {/* <span className="title-under"></span> */}
          </h1>
        </div>
      </div>

      <form className="form-group">
        <div className="container">
          <div>
            <Table className="styled-table" style={{ marginLeft: "300px" }}>
              <Thead>
                <Tr>
                  <Th>Donor Name</Th>
                  <Th>Medicine Name</Th>
                  <Th>Medicine MG</Th>
                  <Th>Medicine Quantity</Th>
                  {/* <Th>Address</Th> */}
                  {/* <Th></Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {donors.map((donors) => (
                  <Tr>
                    <Td>{donors.donorName}</Td>
                    <Td>{donors.medname}</Td>
                    <Td>{donors.mg}</Td>
                    <Td>{donors.quantity}</Td>
                    {/* <Td>{r.address}</Td> */}
                    {/* <Td><button onClick={()=>DeleteDonor(r._id)}>Delete</button></Td> */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {/* <MedicineTable propdata={{donors},{head1:'DonorName'},{head2:'Emial'},{head3:'PhoneNumber'},{head4:'Address'}}/> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AllDonors;
