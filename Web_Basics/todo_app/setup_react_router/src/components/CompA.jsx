import React from "react";
import CompB from "./CompB";


export default function CompA() {
  return (
    <div className="comp">
      <h1>CompA</h1>
      <br />
      <h2>The word is:</h2>
      <CompB/>
    </div>
  );
}
