"use client"

import { useHover } from "@/hooks/useHover"
import { start } from "node:repl";

interface CardContentContainerProps{
    children: React.ReactNode;
    background?: string;
    xTransitionDir?: "left" | "right" | 'none'; // the x transition direction, if it has one
    yTransitionDir?: "bottom" | "top" | 'none';  // the y transition direction, if it has one

    swapEndPos?: boolean; //swaps the end position for the specific instance when the container is using the opposing transition and needs to be positioned on the opposing axis. Example: xTransitionDir="none" yTransitionDir="top" half="horizontal" in this example the xposition cannot be controlled and is defaulted to left end positioning 

    half?: 'verticle' | 'horizontal' | 'none'; // is it halved horizontally, vertically, or no half at all

}

const hoverPositions: Record<string, {x:number, y:number}> = {
    
    //positions for when the container covers the entire card
    top:{ x: 0, y: 0 },
    offTop: { x: 0, y: -100},
    offRight: { x: 100, y: 0},
    offBottom: { x: 0, y: 100},
    offLeft: { x: -100, y: 0},

    //positions for when the container is half width cut vertically
    verticalBottom: { x: 0, y: 100 },
    verticalOffScreenBottom: { x: 0, y: 200 },

    //positions for when the container is half width cut Horizontally
    horizontalRight: { x: 100, y: 0 },
    horizontalOffScreenLeft: { x: -100, y: 0 },
    horizontalOffScreenRight: { x: 200, y: 0 },

};


export const CardContentContainer= ({children, background = "#000000", xTransitionDir='none', yTransitionDir='none', half = 'none', swapEndPos=false}:CardContentContainerProps) => {
    const hover = useHover();
    
    const transitionDirection = (xTransitionDir:string, yTransitionDir:string, half: string, swapEndPos: boolean) => {
        //takes in the direction and size and returns a tranlation values
        let translateXStart=0;
        let translateXEnd=0;
        let translateYStart=0;
        let translateYEnd=0;

        switch(half){
            case 'verticle':
                if(xTransitionDir == 'left'){
                    translateXStart = -100;
                    translateXEnd = 0;
                   
                }else if(xTransitionDir == 'right'){
                    translateXStart = 100;
                    translateXEnd = 0;
                } 

                if(swapEndPos == true) {
                    translateYStart = 100;
                    translateYEnd = 100;
                }

                if(yTransitionDir == 'top'){
                    translateYStart = -100;
                    translateYEnd = 0;

                } else if(yTransitionDir == 'bottom') {
                    translateYStart = 200;
                    translateYEnd = 100;
                }  

                
            break;
            case 'horizontal':
                
                if(swapEndPos == true) {
                    translateXStart = 100;
                    translateXEnd = 100;
                }

                if(xTransitionDir == 'left'){
                    translateXStart = -100;
                    translateXEnd = 0;
                    
                }else if(xTransitionDir == 'right'){
                    translateXStart = 200;
                    translateXEnd = 100;
                }

                if(yTransitionDir == 'top'){
                    translateYStart = -100;
                    translateYEnd = 0;
                    
                    

                } else if(yTransitionDir == 'bottom') {
                    translateYStart = 100;
                    translateYEnd = 0;
                }

                
            break;
            case 'none':
                if(xTransitionDir == 'left'){
                    translateXStart = -100;
                    translateXEnd = 0;
                }else if(xTransitionDir == 'right'){
                    translateXStart = 100;
                    translateXEnd = 0;
                }

                if(yTransitionDir == 'top'){
                    translateYStart = -100;
                    translateYEnd = 0;

                } else if(yTransitionDir == 'bottom') {
                    translateYStart = 100;
                    translateYEnd = 0;
                }
            break;
            default:
                break;


        }
            


        return {xStart:translateXStart, xEnd:translateXEnd, yStart:translateYStart, yEnd:translateYEnd}

    }

    const transformValues = (startPos: string, endPos: string, half: string) => {
        let transitionStart, transitionEnd = {x: 0, y: 0} 

        if(half == 'none') {
            switch(startPos){
                case 'top':
                    transitionStart = hoverPositions.offTop;
                    break;
                case 'right':
                    transitionStart = hoverPositions.offRight;
                    break;
                case 'bottom':
                    transitionStart = hoverPositions.offBottom;
                    break;
                case 'left':
                    transitionStart = hoverPositions.offLeft;
                    break;
                default:
                    break;
            }

            transitionEnd = hoverPositions.top;

        } else if(half == 'horizontal'){
            switch(startPos){
                case 'top':
                    transitionStart = hoverPositions.offTop;
                    break;
                case 'right':
                    transitionStart = hoverPositions.offRight;
                    break;
                case 'bottom':
                    transitionStart = hoverPositions.offBottom;
                    break;
                case 'left':
                    transitionStart = hoverPositions.offLeft;
                    break;
                default:
                    break;
            }

        } else if(half == 'verticle'){


        }

    }

    const tD = transitionDirection(xTransitionDir, yTransitionDir, half, swapEndPos)
    return (
        <div className="w-full h-full absolute">
            <div className="ease-in-out duration-500" 
            style={{
                width: `${half == 'horizontal' ? 50 : 100}%`,
                height: `${half == 'verticle' ? 50 : 100}%`,
                backgroundColor:`${background}`,
                borderRadius: `${hover ? '0rem' : '.4rem'}`,
                transform: `translate(${hover ? tD.xEnd : tD.xStart}%,${hover ? tD.yEnd : tD.yStart}%)`,

            }}
            >
                {children}
            </div>
        </div>
    )

}