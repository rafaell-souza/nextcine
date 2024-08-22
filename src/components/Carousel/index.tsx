"use client";
// react-icons
import { IoIosArrowDroprightCircle } from "react-icons/io";
// custom hooks
import useScroll from "@/hooks/useScroll";
// react hooks
import { useRef } from "react";

const Carousel = ({
    style,
    children,
}: {
    style?: string,
    children: React.ReactNode
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollLeft = useScroll(ref, -300);
    const scrollRight = useScroll(ref, 300);
    return (
        <>
            <button
                onClick={scrollLeft}
                className="rotate-180 absolute left-0 flex top-20 text-4xl z-30">
                <IoIosArrowDroprightCircle />
            </button>
            <section
                ref={ref}
                className={`flex overflow-x-hidden snap-x snap-mandatory gap-x-[6px] text-white relative w-full h-full ${style}`}>
                {children}
            </ section>
            <button
                onClick={scrollRight}
                className="absolute right-0 flex top-20 text-4xl z-30">
                <IoIosArrowDroprightCircle />
            </button>
        </>
    )
}

export default Carousel;