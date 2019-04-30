import React from "react";
import "./style.css";

function CardChoices(props) {
  return (
    <div className="row">
        <div className="col-3">
            <div className="card">
                <img src={props.image} className="card-img-top" alt=""/>
            </div>
        </div>
    </div>
  );
}

export default CardChoices;