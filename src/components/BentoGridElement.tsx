import React from "react"

interface BentoGridElementProps{
    row:number,
    column:number,
    cellHeight:number,
    cellWidth:number,
    className?:string,
    children?: React.ReactNode;
}


export const BentoGridElement = ({row, column, cellHeight,cellWidth, className, children}:BentoGridElementProps) => {

    return (
        <>
            <div className={`w-full h-full ${className}`}
            style={{
              gridArea: `${row} / ${column} /span ${cellHeight}/ span ${cellWidth}`, 
          }}
            >
                {children}
            </div>
        </>
    )

}