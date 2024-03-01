import React, {useState} from "react";
import Modal from "../components/modal"

const Main = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [customWidth, setCustomWidth] = useState(920)
    const [customHeight, setcustomHeight] = useState(653)
    const [modalHide, setModalHide] = useState(true)
    const [darkMode, setDarkMode] = useState(true)
    const [dynamicSize, setDynamicSize] = useState(true)

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }

    window.addEventListener('resize', handleResize);

    let darkModeConditional = darkMode ? "Dark" : ""
    
    return (
        <div className={"wholePage wholePage" + darkModeConditional} style={dynamicSize ? {} : {height: customHeight, width: customWidth}}>

            <Modal 
                hidden={modalHide}
                darkMode={darkMode}
                dynamicSize={dynamicSize}
                hideFunction={setModalHide}
                darkFunction={setDarkMode}
                sizeFunction={setDynamicSize} 
                widthFunction={setCustomWidth} 
                heightFunction={setcustomHeight} 
            />

            <div className={"headerBody standardBorder standardBorder" + darkModeConditional}> 
                <h2>Window Scale Demo</h2>
                <button className={"standardButton standardButton" + darkModeConditional} onClick={() => setModalHide(false)}>SETTINGS</button>
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