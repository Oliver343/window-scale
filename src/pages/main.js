import React, {useState} from "react";
import Modal from "../components/modal"

const Main = () => {
    // variables here 

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [modalHide, setModalHide] = useState(true)

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }

    window.addEventListener('resize', handleResize);
    
    return (
        // JSX html here
        <div className="wholePage">

            <Modal hidden={modalHide} hideFunction={setModalHide} />

            <div className="standardBorder headerBody"> 
                <h2>Window Scale Demo</h2>
                <button className="standardButton" onClick={() => setModalHide(false)}>SETTINGS</button>
            </div>
            <div className="standardBorder mainBody">
                Width is: {width}
                <br />
                Height is: {height}
            </div>
            <div className="standardBorder footerBody"> FOOTER </div>
        </div>
    )
}

export default Main;