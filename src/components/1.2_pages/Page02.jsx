import React, { useState } from "react";

function PageTwo() {

    return (
      <div>
        <Pagenum title = "Page 2"
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
  
  export default PageTwo;

