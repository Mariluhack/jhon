import React, { useEffect, useState } from "react";
import axios from "axios";

import Profile from "../Profile/Profile";

import "./UserGallery.css";
import Spinner from "../Spinner/Spinner";

export default function UserGallery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://60f2262e6d44f3001778853a.mockapi.io/api/registro")
      .then((response) => setUsers(response.data))
      .catch();
  }, []);

  return (
    <div className="userGallery_container">
      {users.length === 0 && <Spinner />}

      {users.map((user) => (
        <Profile key={user.id} prefijo="Usuario:">
          {user.name}
        </Profile>
      ))}
    </div>
  );
}
