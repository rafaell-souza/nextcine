'use client';

import { useState, useEffect } from "react";

const useScroll = (ref: React.RefObject<HTMLDivElement>) => {
    const [userInteraction, setUserInteraction] = useState(false);

    const handleScroll = (
        behaviorType: "smooth" | "instant",
        scrollValue: number
    ) => {
        if (ref.current) {
            ref.current.scrollTo({
                behavior: behaviorType,
                left: ref.current.scrollLeft + scrollValue,
            });
        }
    }

    const handleLeftScroll = () => {
        if (ref.current) {
            if (ref.current.scrollLeft > 0) {
                handleScroll("smooth", -905);
            }
            else if (ref.current.scrollLeft === 0) {
                handleScroll("instant", 9050);
                handleScroll("smooth", -905);
            }
        }
    }

    const handleRightScroll = () => {
        if (ref.current) {
            if (ref.current.scrollLeft < 9050) {
                handleScroll("smooth", 905);
            }
            else if (ref.current.scrollLeft === 9050) {
                handleScroll("instant", -9050);
                handleScroll("smooth", 905);
            }
        }
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!userInteraction) {
            interval = setInterval(() => {
                handleRightScroll();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [userInteraction]);


    return { handleLeftScroll, handleRightScroll, setUserInteraction };
}

export default useScroll;