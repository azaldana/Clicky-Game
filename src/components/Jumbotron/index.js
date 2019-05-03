import React from "react";
import "./style.css";

function Jumbotron() {
    return (
    <div className="container-jumbo">
      <div className="jumbotron jumbotron-fluid">
        <div className="container-text">
        <img src="./images/office-logo.jpg" alt="" id="jumbo-logo"/>
        <p className="lead"><strong id="test">Test Your Memory!</strong><br></br>Click on an image to earn points, but don't be a Dwight and click on any more than once!</p>
        </div>
    </div>
    </div>
);
}

export default Jumbotron;