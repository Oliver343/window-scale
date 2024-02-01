import React, {useState} from "react";
import "./modal.css"

const Modal = (props) => {
    // variables here 

    
    return (
        // JSX html here
        <>
        <div className="modal" hidden={props.hidden}>
            <div className="overlay"></div>
            <div className={"modalBody modalBody" + (props.darkMode ? "Dark" : "")}>
                <h2>SETTINGS</h2>
                <label for="dark" >Dark Mode:</label> <input name="dark" type="checkbox" onChange={(e) => props.darkFunction(e.target.checked)}/>
                <br />
                <br />
                <button className="standardButton closeButton" onClick={() => props.hideFunction(true)}>CLOSE</button>
            </div>
        </div>
        </>
    )
}

export default Modal;