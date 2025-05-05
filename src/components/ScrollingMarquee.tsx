"use client"

import React from "react";
import { useState, useRef, useEffect} from "react";
import useDocumentSize from "@/hooks/useDocumentSize"
import { useElementWidth } from "@/hooks/useElementWidth";
import { useScrollPercent } from "@/hooks/useScrollPercent";



const ScrollingMarquee = ({children}: {children: React.ReactNode}) =>{
    
    const {width} = useDocumentSize();
    const contentWidthRef = useRef<HTMLDivElement> (null);
    const [contentWidth, setContentWidth] = useState<number>(1);
    const {scrollPercentage} = useScrollPercent();
    const {ref: boxRef, width: boxWidth} = useElementWidth<HTMLDivElement>();


    const x = useRef(0)
    const transformRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if(contentWidthRef.current != null)
            setContentWidth(getWidthOfContent(contentWidthRef.current))
    }, []);

    useEffect(()=>{
        let animationFrameId: number;

        const animate = () => {
            x.current = scrollPercentage*2;
            
            let clamped_value = 0 + (x.current - 0) % (contentWidth - 0 + 1)
            if(transformRef.current) {
                transformRef.current.style.transform = `translateX(${-clamped_value}px)`
            }
            animationFrameId = requestAnimationFrame(animate)
        }

        animate();

        return () => cancelAnimationFrame(animationFrameId)

    },[scrollPercentage])

    const getWidthOfContent = (Widthelement:HTMLDivElement) => { // intended to get the width of the child element input by the user
        if (!Widthelement) return 0;  
        return Widthelement.getBoundingClientRect().width
    }
    
    const calcDuplicateElements = (containerWidth:number, elementWidth:number) => {
        const totalLength = (containerWidth) // the total length needed in order for the element to be translated by one whole width of the input element and not show a gap
        const numOfElements = Math.ceil(totalLength/elementWidth)  // rounding up to fill gap
        return numOfElements
    }

return(
    <>
    <div className="w-full h-fit overflow-x-hidden " ref={boxRef}>
        <div className="flex flex-row text-nowrap"
        ref={transformRef}
        style={{
            willChange: "transform",
        }}
        > {/* this div is for transforms*/}
            
        <div 
        className="w-fit h-fit"
        ref={contentWidthRef}
        >
            {children}
        </div>
        
        {Array.from({length: calcDuplicateElements(width,contentWidth)}).map((_,i) => (
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