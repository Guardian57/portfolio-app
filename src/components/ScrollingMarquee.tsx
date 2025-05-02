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
        const boundingRect = Widthelement.getBoundingClientRect()
        

        return boundingRect.width

    } 

    


return(
    <>
    <div className="w-full h-fit flex flex-row text-nowrap overflow-x-hidden">
        <div 
        className="w-fit h-fit"
        ref={contentWidthRef}
        >
            {children}
        </div>
        
        {Array.from({length: 10}).map((_,i) => (
            <React.Fragment key={i}>
                {React.Children.map(children, (child) => 

                    React.isValidElement(child) ? React.cloneElement(child) : child
                )}


                
            </React.Fragment>



        ))}
        
    </div>
    </>

)


}

export default ScrollingMarquee