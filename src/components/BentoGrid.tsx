"use client"
import { useState, useRef, useEffect } from "react";

interface BentoGridProps {
    spacing: number;
    children?: React.ReactNode;
}

const BentoGrid = ({spacing,children}: BentoGridProps) => {
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
        className={`w-full h-auto grid grid-cols-3 mb-16 mt-8 pr-8 pl-8 box-border`}
        style={{
            gap: `${spacing * (containerWidth/1112)}px`,
            gridAutoRows: "1fr", //makes sure that gird units stay the same height as other rows when height or aspect is not specified
        }}
        >
            {children}
        </div>
    )
}

export default BentoGrid;