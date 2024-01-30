import React, {useState} from "react";

const Main = () => {
    // variables here 

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }

    window.addEventListener('resize', handleResize);
    
    return (
        // JSX html here
        <div className="wholePage">
            TEST
            <br />
            Width is: {width}
            <br />
            Height is: {height}
        </div>
    )
}

export default Main;