"use client"
import { useScrollPercent } from "@/hooks/useScrollPercent";
import exp from "constants";
import { useEffect, useState } from "react";

interface triggerClassResults{
    trigger: string,
    card: string,
}

const Postcard = () => {
    let b = useScrollPercent().scrollPercentage
    let overlay = true; //temporarily disables overlay for WIP
    const [expanded, setExpanded] = useState<boolean>(false);
    const [scrollHalf, setScrollHalf] = useState<boolean>(false);
    const [scrollFull, setScrollFull] = useState<boolean>(false);
    const [classes, setClasses] = useState<triggerClassResults>({trigger: '', card: ''});


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

    useEffect(() => {

        setClasses(triggerClass(expanded,b))

    }, [expanded, scrollHalf, scrollFull])

    const pointDown = () => {
        setExpanded(true)
    }

    const triggerClass = (expanded: boolean, b: number): triggerClassResults => {
        let triggerClasses = ''
        let CardClasses = ''
        
        if (expanded){
            triggerClasses = 'bottom-0 bg-logo-blue/90'
            CardClasses = 'top-1/2 -translate-y-1/2 -rotate-x-180'
        } else {
            if(b < 50){
                triggerClasses = '-bottom-[101vh] bg-logo-blue/0' 
                CardClasses = 'top-0'
            } else if (b < 90){
                triggerClasses = '-bottom-[90vh] bg-logo-blue/0'
                CardClasses = 'top-1/2 group-hover:top-0'
            } else {
                triggerClasses = '-bottom-[90vh] bg-logo-blue/0'
                CardClasses = 'top-0 group-hover:-top-10'
            } 
        }

        return {
            trigger: triggerClasses,
            card: CardClasses,
        }

    }

    return (
        <>
            {/* BACKGROUND OVERLAY - for when the contact form is expanded */}
            {/* <div className={`fixed w-full h-full bg-logo-blue z-50 ${expanded ? "block bg-opacity-90" : "hidden bg-opacity-0"} transition-all`}
            
            >
            </div> */}

            {/* TRIGGER ZONE - for triggering the expansion and hover effects */}

            <div className={`fixed w-full h-full flex flex-wrap bg-logo-blue perspective-midrange ${classes.trigger} z-50 group justify-center transition-all duration-500`}
           
            onPointerDown={() => {expanded ? setExpanded(false) : null}}
            >
                <div className={`absolute w-1/2 h-1/2 bg-[#f2e2b7] z-50 drop-shadow-2xl ${classes.card} transition-all transform-3d duration-500`}
                onPointerDown={pointDown}
                >
                </div>

            </div>

            

        </>
        


    )
}

export default Postcard