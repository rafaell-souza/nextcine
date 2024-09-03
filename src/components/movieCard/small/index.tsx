"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ISmallCard from "@/app/interfaces/ISmallCard";

const SmallCard = ({ id, title, image }: ISmallCard) => {
    return (
        <>
            <Link href={`/movie/${id}`}
                className="h-48 w-32 flex relative flex flex-col border border-zinc-950 snap-center shrink-0 rounded-lg shrink-0 hover:opacity-80">
                <img
                    src={image}
                    alt={title}
                    className=" h-44 rounded-se-lg rounded-ss-lg flex shrink-0 z-10" />

                    <div className="bg-zinc-900 rounded-es-lg rounded-ee-lg">
                        <h2 className="text-white text-[12px] text-center font-bold p-[3px]">
                            {title.length >= 14 ? title.slice(0,14)+"..." : title}
                        </h2>
                    </div>
            </Link>
        </>
    )
}

export default SmallCard;