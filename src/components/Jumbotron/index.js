import React from "react";
import "./style.css";

function Jumbotron() {
    return (
    <div className="container-jumbo">
      <div className="jumbotron jumbotron-fluid">
        <div className="container-text">
        <h1 className="display-4">Spongebob Click Game</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </div>
    </div>
);
}

export default Jumbotron;