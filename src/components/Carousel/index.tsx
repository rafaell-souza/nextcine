"use client";

const Carousel = ({
    style,
    children,
}: {
    style?: string,
    children: React.ReactNode
}) => {
    // the buttom wil come here have to be avaliable only for mid and large screens
    return (
        <section
            className={`flex overflow-x-hidden mb-3 gap-x-[6px] text-white relative w-full h-full ${style}`}
            onClick={() => {}}>
            {children}
        </ section>
    )
}

export default Carousel;