"use client"

import React from "react";
import { useState, useRef, useEffect} from "react";




const ScrollingMarquee = ({children}: {children: React.ReactNode}) =>{
    const contentWidthRef = useRef<HTMLDivElement> (null);

    useEffect(() => {
        if(contentWidthRef.current != null)
            console.log(getWidthOfElement(contentWidthRef.current));



    }, []);

    const getWidthOfElement = (Widthelement:HTMLDivElement) => {
        return Widthelement.getBoundingClientRect().width
    } 

    


return(
    <>
    <div className="w-full h-fit overflow-x-hidden">
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