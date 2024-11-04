"use client"
import { useState, useRef, useEffect } from "react";


const BentoGrid = ({spacing}: {spacing: number}) => {
    const containerRef = useRef <HTMLDivElement> (null);
    const [containerWidth, setContainerWidth] = useState(1112);

    useEffect(() => {
        
        const handleResize = () => {
            if(containerRef.current){
                setContainerWidth(containerRef.current.getBoundingClientRect().width);
            }
        }
        
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
        
    }, [])
    
    return (
        <div 
        ref={containerRef}
        className={`w-full h-auto grid grid-cols-3 p-3 box-border`}
        style={{
            gap: `${spacing * (containerWidth/1112)}px`,
        }}
        >
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square"
            style={{
                gridArea: "1 / 1 / span 2/ span 2",
            
            }}
            >

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2"
             style={{
                gridArea: "1 / 3 / span 2/ span 1",
            
            }}
            >

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
        </div>
    )
}

export default BentoGrid;