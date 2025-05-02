import Image from "next/image";
import BentoGrid from "@/components/BentoGrid";
import ScrollingMarquee from "@/components/ScrollingMarquee";


export default function Home() {
  return (
    <>
      <div className="xl:w-[1112px] m-auto mt-14">
        <BentoGrid spacing={30}>
          <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square"
            style={{
                gridArea: "1 / 1 / span 2/ span 2",
            
            }}
            >
              {/* Header Title Card */}
              
              <div className="w-full h-full p-[8%]">
                
              <div className="w-full h-full flex flex-col justify-center gap-20">
                
                <div className="w-full">
                  <Image 
                  width={429}
                  height={187}
                  className=""
                  style={{width:"20rem", height:"auto"}}
                  src="/branding/logo/Stack_Cutout_Blue.png"
                  alt="t"
                  />
                </div>
                <div className="w-full">
                  {/* <h2 className="w-full  text-4xl font-[Roboto] font-medium text-slate-700">
                    Motion Designer
                  </h2> */}
                  <h2 className=" font-[Roboto]">
                    <span className="text-4xl">I am a <span className="font-bold text-[#00A6E9]">Motion Designer</span>,</span> 
                  </h2>
                  <p className="mt-4 font-[Roboto]">
                    creating ready-to-post 2D & 3D content from concept to sound design. My specialty is creating unconventional visuals for fashion and furniture.
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* Hero Card */}

            <div className="w-auto h-auto relative rounded-xl cell-hover"
             style={{
                gridArea: "1 / 3 / span 2/ span 1",
            
            }}
            >
              <div className="w-full h-full absolute outline-2 outline outline-[#e5e7eb] overflow-hidden rounded-xl"
              >
                <Image 
                width={810}
                height={810}
                className="hero_bg"
                style={{height: "100%", width:"auto", objectFit:"cover"}}
                src="/work/MindMaze/MindMaze_Cover_Background.png"
                alt="t"
                />
              </div>

              <div className="w-full h-full absolute"
              >
                <Image 
                width={810}
                height={810}
                className="hero_subject"
                style={{height: "100%", width:"100%", objectFit: "cover", overflow: "visible"}}
                src="/work/MindMaze/MindMaze_Cover_Character.png"
                alt="t"
                />
              </div>
              <div className="w-full h-full absolute">
                <Image 
                width={1024}
                height={1024}
                className="rotate-0 scale-100 hover:scale-150  hover:rotate-12 transition-transform"
                style={{width: "70%", height: "auto",position: "absolute", bottom: "-5%", left: "5%", overflow: "visible"}}
                src="/work/MindMaze/mind_maze_title.png"
                alt="t"
                />

              </div>
              

            </div>
            </BentoGrid>
        </div>
            {/* Section Heading */}

            <div className="w-full border-t-4 border-b-4 border-black">
              <ScrollingMarquee>
                <div className="flex items-center justify-evenly gap-5">
                  <div className="w-fit h-fit text-3xl font-bold font-[Roboto] float-left uppercase">Featured Projects</div>
                  <div className="w-2 h-2 bg-black rounded-full mr-6"></div>
                </div>
              </ScrollingMarquee>
            </div>

            {/* Featured Projects Grid */}

            <div className="xl:w-[1112px] m-auto mt-14">
            <BentoGrid spacing={30}>
            <div className="w-auto h-auto rounded-xl outline-2 outline outline-[#e5e7eb] cell-hover"
            style={{
                    gridArea: "1 / 1 /span 2/ span 1",
                
                }}
            >
            </div>
            <div className="w-auto h-auto rounded-xl outline-2 outline outline-[#e5e7eb] cell-hover"
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
