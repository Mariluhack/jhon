import { useState, useEffect } from "react";

import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [name, setName] = useState("John B");

  return (
    <div className="registrationForm_container">
      <h4>Registration Form</h4>

      <form>
        <label>
          Nombre:
          <br />
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
        </label>
      </form>
      
    </div>
  );
}
