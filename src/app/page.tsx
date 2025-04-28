import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <>
      <div className="xl:w-[1112px] m-auto mt-6">
        <BentoGrid spacing={30}>
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
            ></div>
            </BentoGrid>
            
            <BentoGrid spacing={30}>
            <div className="w-auto h-auto rounded-xl border-solid border-2"
            style={{
                    gridArea: "1 / 1 /span 2/ span 1",
                
                }}
            >
            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2"
                style={{
                    gridArea: "1 / 2 /span 1/ span 2",
                
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
            </BentoGrid>
      </div>
    </>
    
  );
}
