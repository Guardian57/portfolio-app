
interface BentoGridElementProps{
    row:number,
    column:number,
    cellHeight:number,
    cellWidth:number,
    className?:string,
}


export const BentoGridElement = ({row, column, cellHeight,cellWidth, className}:BentoGridElementProps) => {

    return (
        <>
            <div className={`w-auto h-auto ${className}`}
            style={{
              gridArea: `${row} / ${column} /span ${cellHeight}/ span ${cellWidth}`, 
          }}
            >
                
            </div>
        </>
    )

}