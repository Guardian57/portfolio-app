"use client"
import { ReactNode, useState } from "react"
import HeaderNotch from "@/components/HeaderNotch"

const Header = ({children,}: {children?: React.ReactNode}) => {
    const [isHovering, setIsHovering] = useState<boolean>(false)

    return (
        <>
            <div 
            className="group w-full h-12 fixed hover:h-14 z-10 hover:drop-shadow-lg bg-[#00A6E9] flex transition-all duration-300 ease-in-out"
            onPointerEnter={() => setIsHovering(true)}
            onPointerLeave={() => setIsHovering(false)}
            
            >
            
                <div className="relative w-[1440] h-full default-margin">
                    
                    <div className="h-full flex items-center">
                        <svg className="fill-white w-[190] group-hover:scale-150 group-hover:translate-y-5 transition-transform duration-300 ease-in-out origin-top-left" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 637.54 114.31">
                        
                        <g id="Inline_Cutout_Blue">
                            <g id="Logo">
                            <g id="Bubble_Cut">
                                <polygon points="331 64.96 347.48 64.96 339.24 41.36 331 64.96"/>
                                <path d="m580.39,0h-314.47c-31.57,0-57.15,25.59-57.15,57.15h0c0,31.57,25.59,57.15,57.15,57.15h314.47c31.57,0,57.15-25.59,57.15-57.15h0c0-31.57-25.59-57.15-57.15-57.15Zm-313.7,85.17c-15.47,0-28.02-12.54-28.02-28.02s12.54-28.02,28.02-28.02,28.02,12.54,28.02,28.02-12.54,28.02-28.02,28.02Zm88.22,1l-4.65-13.24h-22.03l-4.61,13.24h-10.27l21.48-56.88h8.87l21.52,56.88h-10.31Zm28.55,0h-9.84V29.29h9.84v56.88Zm23.57-12.04c2.2,3.23,5.42,4.85,9.67,4.85,3.88,0,6.8-.87,8.75-2.62,1.95-1.74,3.19-4.65,3.71-8.71h9.84c-.57,6.07-2.81,10.8-6.72,14.2s-9.1,5.1-15.59,5.1c-4.53,0-8.52-1.07-11.97-3.22-3.45-2.15-6.11-5.2-7.99-9.16-1.88-3.96-2.85-8.55-2.93-13.79v-5.31c0-5.36.95-10.09,2.85-14.18,1.9-4.09,4.63-7.24,8.18-9.45,3.55-2.21,7.66-3.32,12.32-3.32,6.28,0,11.33,1.7,15.16,5.1s6.05,8.21,6.68,14.43h-9.84c-.47-4.09-1.66-7.04-3.57-8.85-1.91-1.81-4.72-2.71-8.42-2.71-4.3,0-7.6,1.57-9.9,4.71s-3.48,7.75-3.54,13.82v5.04c0,6.15,1.1,10.84,3.3,14.08Zm85.96,12.04h-9.84v-25.23h-25.43v25.23h-9.88V29.29h9.88v23.67h25.43v-23.67h9.84v56.88Zm48.87,0h-37.19V29.29h36.91v7.97h-27.03v15.7h23.36v7.81h-23.36v17.42h27.3v7.97Zm52.54,0h-10.59l-11.41-21.88h-11.02v21.88h-9.88V29.29h20c6.56,0,11.63,1.47,15.2,4.42,3.57,2.95,5.35,7.21,5.35,12.78,0,3.81-.92,6.99-2.75,9.56s-4.39,4.54-7.68,5.92l12.77,23.68v.51Z"/>
                                <path d="m579.56,39.84c-1.73-1.67-4.32-2.53-7.75-2.58h-10.43v19.06h10.16c3.33,0,5.94-.84,7.81-2.52s2.81-3.98,2.81-6.89-.87-5.4-2.6-7.07Z"/>
                            </g>
                            <g id="Jake">
                                <g id="Jake_Shape" data-name="Jake Shape">
                                <path d="m27.3,30.1h9.84v39.88c0,5.44-1.7,9.77-5.1,12.97s-7.88,4.8-13.46,4.8c-5.94,0-10.52-1.51-13.75-4.53-3.23-3.02-4.84-7.2-4.84-12.54h9.84c0,3.02.75,5.29,2.25,6.82,1.5,1.52,3.67,2.29,6.5,2.29,2.66,0,4.77-.88,6.35-2.63,1.58-1.75,2.36-4.18,2.36-7.27V30.1Z"/>
                                <path d="m80.99,73.73h-22.03l-4.61,13.24h-10.27l21.48-56.88h8.87l21.52,56.88h-10.31l-4.65-13.24Zm-19.26-7.97h16.48l-8.24-23.59-8.24,23.59Z"/>
                                <path d="m120.73,62.4l-6.45,6.84v17.73h-9.88V30.1h9.88v26.68l5.47-6.76,16.64-19.92h11.95l-21.13,25.2,22.34,31.68h-11.72l-17.11-24.57Z"/>
                                <path d="m190.07,61.58h-23.36v17.42h27.3v7.97h-37.19V30.1h36.91v7.97h-27.03v15.7h23.36v7.81Z"/>
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                        <div className="w-[400] absolute -left-8 -bottom-[34] -z-30">
                        <HeaderNotch isHovering={isHovering}/>
                        </div>
                    </div>
                    
                    <div>
                        {children}
                    </div>
                    
                </div>


            </div>
            <div className="w-full h-12">
                {/* Spacer that pushes down the page to make room for the header */}
            </div>
        </>



    )


}

export default Header