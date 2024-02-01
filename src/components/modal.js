import React, {useState} from "react";
import "./modal.css"

const Modal = (props) => {
    // variables here 
    const [tempWidth, setTempWidth] = useState(920)
    const [tempHeight, setTempHeight] = useState(653)
    
    return (
        // JSX html here
        <>
        <div className="modal" hidden={props.hidden}>
            <div className="overlay"></div>
            <div className={"modalBody modalBody" + (props.darkMode ? "Dark" : "")}>
                <h2>SETTINGS</h2>
                <label for="dark" >Dark Mode:</label> <input name="dark" type="checkbox" defaultChecked="true" onChange={(e) => props.darkFunction(e.target.checked)}/>
                <br />
                <label for="size" >Dynamic Sizing:</label> <input name="size" type="checkbox" defaultChecked="true" onChange={(e) => props.sizeFunction(e.target.checked)}/>
                <br />
                <label for="sizeW" >Page Width (px):</label>
                <input disabled={props.dynamicSize} type="number" value={tempWidth}  onChange={(e) => setTempWidth(parseInt(e.target.value))} min={100} name="sizeW" />
                <br />
                <label for="sizeH" >Page Height (px):</label>
                <input disabled={props.dynamicSize} type="number" value={tempHeight}  onChange={(e) => setTempHeight(parseInt(e.target.value))} min={50} name="sizeH" />
                <br />
                <button disabled={props.dynamicSize} onClick={() => {props.widthFunction(tempWidth); props.heightFunction(tempHeight); console.log(tempWidth)}}>SET</button>
                <br />
                <br />
                <button className={"closeButton standardButton standardButton" + (props.darkMode ? "Dark" : "")} onClick={() => props.hideFunction(true)}>CLOSE</button>
            </div>
        </div>
        </>
    )
}

export default Modal;