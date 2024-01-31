import React, {useState} from "react";
import "./modal.css"

const Modal = (props) => {
    // variables here 

    
    return (
        // JSX html here
        <>
        <div className="modal" hidden={props.hidden}>
            <div className="overlay"></div>
            <div className="modalBody">
                <h2>SETTINGS</h2>
                <button className="standardButton closeButton" onClick={() => props.hideFunction(true)}>CLOSE</button>
            </div>
        </div>
        </>
    )
}

export default Modal;