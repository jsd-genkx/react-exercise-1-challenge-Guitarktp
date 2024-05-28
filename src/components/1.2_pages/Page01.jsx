import React, { useState } from "react";

function PageOne() {

    return (
      <div>
        <Pagenum title = "Page 1"
        />
      </div>
    );
  }

  
const Pagenum = ({ title }) => {
	return (
	<div>
		<h2> This is {title} </h2>
		<span> Welcome to {title} </span>
	</div>
	);
};
  
  export default PageOne;



