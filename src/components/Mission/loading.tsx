import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="loading">
      <h5 className="loadingText"> Welcome to SpaceX-Client-app</h5>
      <Spinner
        animation="border"
        style={{
          height: 100,
          width: 100,
          color: "blue",
          position: "absolute",
        }}
      />
    </div>
  );
}
