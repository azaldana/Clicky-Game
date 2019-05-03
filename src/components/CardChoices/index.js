import React from "react";
import "./style.css";

const CardChoices = props => {
    return (

        <div className="col-3">
            <div className="card" 
            value={props.id} 
            onClick={() => props.handleClick(props.id)}
            >
                <img src={props.image} className="card-img-top" 
                alt={props.name} />
            </div>
        </div>

    );
}

export default CardChoices;