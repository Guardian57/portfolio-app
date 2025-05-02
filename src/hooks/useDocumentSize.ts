import { useState, useEffect } from "react";

function getDocumentSize() {
    const {clientWidth: width, clientHeight: height} = document.documentElement;
    return {
        width,
        height
    };
}

/**
 * Custom Hook that returns the current width and height of the document (not the window),
 * excluding scrollbars (based on `document.documentElement.clientWidth` and `clientHeight`).
 *
 * @returns {{ width: number; height: number }} An object containing `width` and `height` properties.
 *
 * @example
 * const { width, height } = useDocumentSize();
 */

export default function useDocumentSize() {

    const [documentDimensions, setDocumentDimensions] = useState(getDocumentSize());

    useEffect(() => {
        function handleResize() {
            setDocumentDimensions(getDocumentSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    },[])

    return documentDimensions
}
