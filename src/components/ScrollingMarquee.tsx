"use client"

import React from "react";
import { useState, useRef, useEffect} from "react";
import useDocumentSize from "@/hooks/useDocumentSize"
import { useElementWidth } from "@/hooks/useElementWidth";




const ScrollingMarquee = ({children}: {children: React.ReactNode}) =>{
    const contentWidthRef = useRef<HTMLDivElement> (null);
    const {width, height} = useDocumentSize();
    const {ref: boxRef, width: boxWidth} = useElementWidth<HTMLDivElement>();
    
    useEffect(() => {
        if(contentWidthRef.current != null)
            console.log(getWidthOfElement(contentWidthRef.current));
    }, []);

    console.log("box width: ",Math.round(boxWidth))
    console.log("total width: ", width)
    console.log('')

    const getWidthOfElement = (Widthelement:HTMLDivElement) => {
        return Widthelement.getBoundingClientRect().width
    } 

return(
    <>
    <div className="w-full h-fit overflow-x-hidden" ref={boxRef}>
        <div className="flex flex-row text-nowrap"
        style={{
            transform: `translateX(${0}px)`,
        }}
        > {/* this div is for transforms*/}
            
        <div 
        className="w-fit h-fit"
        ref={contentWidthRef}
        >
            {children}
        </div>
        
        {Array.from({length: 5}).map((_,i) => (
            <React.Fragment key={i}>
                {React.Children.map(children, (child) => 

                    React.isValidElement(child) ? React.cloneElement(child) : child
                )}


                
            </React.Fragment>



        ))}
        </div>
    </div>
    </>

)


}

export default ScrollingMarquee