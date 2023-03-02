import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export default function Edit(prop) {
  const userId = localStorage.getItem("userId");
  const [donordata, setDonorData] = useState("");

  function updateDonor() {
    fetch(`/donor/${userId}`, {
      method: "patch",
      body: JSON.stringify(donordata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("update successfully");
        } else {
          console.log("cannot updated");
        }
      })
      .catch((err) => console.log("error", err))
      .finally(() => prop.onClick());
  }

  return (
    <div>
      <SweetAlert
        title={"Edit Your Data"}
        dependencies={[prop.name]}
        onConfirm={() => updateDonor()}
      >
        <form onSubmit={updateDonor} class="form-group">
          Your name is: {prop.name}
          <hr />
          <input
            type={"text"}
            className="form-control"
            value={prop.name}
            onChange={(event) =>
              setDonorData({ donordata: event.target.value })
            }
            placeholder={`Enter your ${prop.name}`}
          />
          <br />
          <br />
          <hr />
        </form>
      </SweetAlert>
    </div>
  );
}
