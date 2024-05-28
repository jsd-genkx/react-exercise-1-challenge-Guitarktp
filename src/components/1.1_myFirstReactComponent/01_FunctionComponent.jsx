import React, { useState } from "react";

function FirstCom({ name = "Earth"}) {

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>
            This is React component is made by a function
        </p>
      </div>
    );
  }

  export default FirstCom
