"use client"
import { useScrollPercent } from "@/hooks/useScrollPercent";
import exp from "constants";
import { useEffect, useState } from "react";



const Postcard = () => {
    let b = useScrollPercent().scrollPercentage
    let overlay = true; //temporarily disables overlay for WIP
    const [expanded, setExpanded] = useState<boolean>(false);
    const [scrollHalf, setScrollHalf] = useState<boolean>(false);
    const [scrollFull, setScrollFull] = useState<boolean>(false);



    useEffect(() => {
        console.log(b)
        if(b > 50){ //the scroll is above 50%
            setScrollHalf(true)
        } else {
            setScrollHalf(false)
        }

        if(b > 90){ //the scroll is above 90%
            setScrollFull(true)
        } else {
            setScrollFull(false)
        }
        
    }, [b])

    const pointDown = () => {
        setExpanded(true)
    }

    return (
        <>
            {/* BACKGROUND OVERLAY - for when the contact form is expanded */}
            <div className={`fixed w-full h-full bg-logo-blue z-50 ${expanded ? "block bg-opacity-90" : "hidden bg-opacity-0"} transition-all`}
            
            >
            </div>

            {/* TRIGGER ZONE - for triggering the expansion and hover effects */}

            <div className={`fixed w-full h-full flex flex-wrap bg-teal-200 ${ expanded ? 'bottom-0 content-center': scrollHalf ? '-bottom-[90vh]' : '-bottom-[101vh]'} z-50 group  justify-center transition-all duration-500`}
            onPointerDown={() => {expanded ? setExpanded(false) : null}}
            >
                <div className={`relative w-1/2 h-1/2 bg-yellow-100 z-50 ${ expanded ? '' : scrollFull ? 'top-0 group-hover:-translate-y-10' : 'top-[50vh]'} group-hover:top-0 transition-all duration-500`}
                onPointerDown={pointDown}
                >
                </div>

            </div>

            

        </>
        


    )
}

export default Postcard