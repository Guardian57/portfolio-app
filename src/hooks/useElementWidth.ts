import { useState, useEffect, useRef } from "react";

export function useElementWidth<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const updateWidth = () => {
            setWidth(element.getBoundingClientRect().width);
        }

        updateWidth(); //initial

        const resizeObserver = new ResizeObserver(() => {
            updateWidth();
        })

        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        }

    },[])

    return {ref, width}
}