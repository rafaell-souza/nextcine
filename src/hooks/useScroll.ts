"use client";

import { useCallback } from "react";

const useScroll = (ref: React.RefObject<HTMLDivElement>, scrollValue: number) => {
    return useCallback(() => {
        if (ref.current) {
            ref.current.scrollTo({
                behavior: "smooth",
                left: ref.current.scrollLeft + scrollValue,
            });
        }
    }, [ref, scrollValue]);
}

export default useScroll;
