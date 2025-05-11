"use client"
import React, { useContext, useState } from "react"
import { useHover } from "@/hooks/useHover";

interface CardImageProps {
    src?: string,
    hovered?:Boolean;
    imgScalePercentage?: {initial:number, zoom: number}, // the percentage amount the image will zoom on cell hover
    imgTranslate?: {x:string, y: string}, // the translation of the image to center subject. used together with img initial scale to prevent edges from showing
    imgTranslateOnHover?: {x:string, y: string},
}


export const CardImage = ({
    src, 
    imgScalePercentage={initial:100, zoom: 100},
    imgTranslate={x:'0',y:'0'},
    imgTranslateOnHover={x:'0',y:'0'},

}: CardImageProps) => {
    const hovered = useHover();
    

    return(
        <>
        <div className="w-full h-full absolute">
        <img className={`w-full h-full object-cover overflow-visible transition-transform`} 
        src={`${src}`} 
        style={{
            transform: `scale(${hovered ? imgScalePercentage.zoom : imgScalePercentage.initial}%) translate(${hovered ? imgTranslateOnHover.x : imgTranslate.x}px, ${hovered ? imgTranslateOnHover.y : imgTranslate.y}px)`,
        }}
        /></div>
        </>

    )

}