function PageThree() {

    return (
      <div>
        <Pagenum title = "Page 3"
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
  
  export default PageThree;
