import React from "react";
import "./style.css";

const Header = props => {
    return (
    <div className="container-navbar">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">The Office Memory Game</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">        
        </div>
        <span class="navbar-text score mr-5">
            Score: {props.score}
        </span>
        <span class="navbar-text high-score mr-5">
            High Score: {props.topScore}
        </span>
        </nav>
    </div>
);
}

export default Header;