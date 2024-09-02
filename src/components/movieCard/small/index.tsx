"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ISmallCard from "@/app/interfaces/ISmallCard";

const SmallCard = ({ id, title, image }: ISmallCard) => {
    return (
        <>
            <Link href={`/movie/${id}`}
                className="h-48 w-32 flex relative flex flex-col border border-zinc-950 snap-center shrink-0 rounded-lg shrink-0">
                <img
                    src={image}
                    alt={title}
                    className=" h-44 rounded-se-lg rounded-ss-lg flex shrink-0 z-10 hover:opacity-90" />

                    <div className="bg-zinc-900 rounded-es-lg rounded-ee-lg">
                        <h2 className="text-white text-[12px] text-center font-bold p-[3px]">
                            {title.length >= 14 ? title.slice(0,14)+"..." : title}
                        </h2>
                    </div>

                    <motion.div className="bg-white relative w-full h-full rounded-lg z-1"></motion.div>
            </Link>
        </>
    )
}

export default SmallCard;