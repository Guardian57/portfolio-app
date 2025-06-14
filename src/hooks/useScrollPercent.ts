import { useState, useEffect,} from "react";

function getWindowInfo(){
    const {innerHeight, scrollY} = window;
    const scrollheight = document.documentElement.scrollHeight;
    const maxScroll = scrollheight - innerHeight;
    const scrollPercentage = maxScroll > 0 
    ? (scrollY / maxScroll) * 100 
    : 0;

    return {
       scrollPercentage
    }
}

export function useScrollPercent() {
    const [windowInfo, setWindowDimensions] = useState(getWindowInfo())

    useEffect(() => {
        function handleResize(){
            setWindowDimensions(getWindowInfo())
        }

        window.addEventListener("scroll",handleResize)

        return () => {
            window.removeEventListener("scroll",handleResize)
        }

    },[])

    return windowInfo
}