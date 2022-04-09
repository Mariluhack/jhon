import React from "react";

import "./Profile.css";

export default function Profile({prefijo, children }) {
  return <div className="profile_container">{prefijo} {children}</div>;
}
