"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ISmallCard from "@/app/interfaces/ISmallCard";

const SmallCard = ({ id, title, image }: ISmallCard) => {
    return (
        <>
            <Link href={`/movie/${id}`}
                className="h-48 w-32 flex relative border border-zinc-950 snap-center shrink-0 rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="absolute h-full rounded-lg z-10 hover:opacity-90" />
                    <motion.div className="bg-white relative w-full h-full rounded-lg z-1"></motion.div>
            </Link>
        </>
    )
}

export default SmallCard;