import React, { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
export default function Agora() {
  const [inCall, setInCall] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setInCall(true)}
      >
        Join Call
      </Button>
      {inCall ? <VideoCall setInCall={setInCall} /> : "waiting to join call"}
    </div>
  );
}
