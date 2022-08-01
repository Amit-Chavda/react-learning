
import '../styles/App.css';
import { useState, useEffect } from "react";

function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function wathchWidth() {
            console.log("setup")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", wathchWidth)

        return () => {
            console.log("cleanup")
            window.removeEventListener("resize", wathchWidth)
        }
    }, []);

    return (
        <h1>Window Width : {windowWidth}</h1>
    );
}

export default WindowTracker;
