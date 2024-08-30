"use client";
// react icon
import { IoIosArrowDroprightCircle } from "react-icons/io";
// react hook
import { useRef } from "react";
// custom hook
import useScroll from "@/hooks/useBigCardScroll";

const BigCarousel = ({ style, children, }: { style?: string, children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { handleLeftScroll, handleRightScroll, setUserInteraction } = useScroll(ref);

    return (
        <main className="w-[905px] h-[360px] relative mb-7">
            <div className="absolute right-20 bottom-0 w-12 h-12 flex z-30 text-4xl text-white">
                <button
                    onClick={() => { handleLeftScroll(); setUserInteraction(true) }}
                    className="rotate-180" >
                    <IoIosArrowDroprightCircle />
                </button>

                <button onClick={() => { handleRightScroll(); setUserInteraction(true) }}>
                    <IoIosArrowDroprightCircle />
                </button>
            </div>

            <section
                ref={ref}
                className={`flex overflow-x-hidden w-full h-full snap-x snap-mandatory text-white relative ${style}`}>
                {children}
            </section>
        </main>
    )
}

export default BigCarousel;