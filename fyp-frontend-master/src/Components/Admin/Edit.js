import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import swal from "@sweetalert/with-react";
import Header from "./Header";

function Edit(props) {
  var id;
  const [admindata, setAdminData] = useState("");

  function updateAdmin(event) {
    event.preventDefault();
    id = localStorage.getItem("loginId");
    console.log(id);

    return fetch(`http://localhost:8000/administrator/${id}`, {
      method: "patch",
      body: JSON.stringify(admindata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        console.log("update successfully");
      } else {
        console.log("cannot updated");
      }
    });
  }

  return (
    <div>
      <SweetAlert 
        title={"Edit Your Data"}
        dependencies={[props.name]}
      >
        <form onSubmit={(event)=>updateAdmin(event)} class="form-group">
          Your name is: {props.name}
          <hr />
          <input
            type={"text"}
            className="form-control"
            value={props.name}
            onChange={(event) =>
              setAdminData({ admindata: event.target.value })
            }
            placeholder={"Enter Name"}
          />
          {console.log(admindata)}
          <br />
          <br />
          <hr />
        </form>
      </SweetAlert>
    </div>
  );
}

export default Edit;
