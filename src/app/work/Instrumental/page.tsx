"use client"
import Image from "next/image"
import ProjectOverview from "@/components/ProjectOverview"
import { useEffect, useRef, useState } from "react"

export default function Instrumental() {
    const [heroWidth, setHeroWidth] = useState <number> (1440)
    const heroRef = useRef<HTMLImageElement| null>(null)

    useEffect(()=>{

        const handleWindowResize = () => {
            if(!heroRef.current) return
            setHeroWidth(heroRef.current.getBoundingClientRect().width)

        }

        handleWindowResize()
        
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
        

    },[])
    
    
    return (
        <div>
            <div className="breakout flex flex-col bg-[#FCD581]">
                <div className="w-auto h-auto m-auto">
                    <Image
                    ref={heroRef}
                    width={1440}
                    height={916}
                    priority={true}
                    src="/work/Instrumental/instrumental_hero.png"
                    alt="Instrumental device Hero Image"
                    />
                </div>
            </div>
            <div className="default-margin"
            style={{
                marginTop: `-${240 * (heroWidth/1440)}px`

            }}>
                <ProjectOverview
                summary={[
                    "Layered Image is a social media post variation built for the open source social media platform Seam. Unlike traditional image carousels, the change between images is instantaneous, controlled by a slider at the bottom of the post which allows viewers to examine each image or slide fast to animate like a flip book. Transparent Layers can be used, giving digital artists the opportunity to directly upload their photoshop layers, creating a breakdown of their work that viewers can interact with. ", 
                    "Initially developed as slide show tool to showcase my work during a first round interview, it has transformed into a novel new way for artist to post their animations, annotations, work in progress, and more. Layered Image is live on Seam and was a finalist for their inaugural Summer Miniapp Challenge 2024."
                ]}
                skills={["React", "UI Design", "Prototyping", "Graphic Design"]}
                duration="30 Weeks"
                role={["Interaction Designer", "Designer", "Programmer"]}
                team={["Jake Aicher", "Jess Lam", "Vincent Lee", "Paul Aicher"]}
                deliverables={["Digital & Physical Prototype"]}
                />
            </div>
        
        </div>




    )



}