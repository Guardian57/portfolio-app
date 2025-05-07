"use client"
import React, { useState, createContext } from "react"
import { hoverContext } from "@/hooks/useHover"

interface BentoGridElementProps{
    row:number,
    column:number,
    cellHeight:number,
    cellWidth:number,
    className?:string,
    children?: React.ReactNode;
}



export const BentoGridElement = ({row, column, cellHeight, cellWidth, className, children}:BentoGridElementProps) => {
    
    
    const [hovered, setHovered] = useState(false); 

    return (
        <>
            <div className={`w-full h-full ${className}`}
            style={{
              gridArea: `${row} / ${column} /span ${cellHeight}/ span ${cellWidth}`, 
          }}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            >
                <hoverContext.Provider value={{hovered}}>
                {children}
                </hoverContext.Provider>
            </div>
        </>
    )
}