import React, {useState} from "react";
import Modal from "../components/modal"

const Main = () => {
    // variables here 

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [modalHide, setModalHide] = useState(true)
    const [darkMode, setDarkMode] = useState(false)

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }

    window.addEventListener('resize', handleResize);

    let darkModeConditional = darkMode ? "Dark" : ""
    
    return (
        // JSX html here
        <div className={"wholePage wholePage" + darkModeConditional} >

            <Modal hidden={modalHide} darkMode={darkMode} hideFunction={setModalHide} darkFunction={setDarkMode} />

            <div className={"headerBody standardBorder standardBorder" + darkModeConditional}> 
                <h2>Window Scale Demo</h2>
                <button className="standardButton" onClick={() => setModalHide(false)}>SETTINGS</button>
            </div>
            <div className={"mainBody standardBorder standardBorder" + darkModeConditional}>
                Width is: {width}
                <br />
                Height is: {height}
            </div>
            <div className={"footerBody standardBorder standardBorder" + darkModeConditional}> FOOTER </div>
        </div>
    )
}

export default Main;