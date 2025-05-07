import { createContext, useContext, useState, ReactNode } from 'react';

export const hoverContext = createContext<{hovered: boolean} | null>(null);

export const useHover = () => {
    const context = useContext(hoverContext);
    if (!context){
        throw new Error("useHover must be used within a HoverProvider");
    }

    return context.hovered;
}