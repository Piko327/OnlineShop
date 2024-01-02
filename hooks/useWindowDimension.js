'use client'
import { useEffect, useState } from 'react';



const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 1200,
        height: 1000,
    });
    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;