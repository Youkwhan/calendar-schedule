import React, { useState } from "react";

export default function Agora() {
  const [inCall, setInCall] = useState(false);
  return <div>{inCall ? "In call" : "waiting to join call"}</div>;
}
