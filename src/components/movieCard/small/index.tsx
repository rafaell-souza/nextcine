"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ISmallCard from "@/app/interfaces/ISmallCard";

const SmallCard = ({ id, title, image }: ISmallCard) => {
    return (
        <>
            <Link href={`/movie/${id}`}
                className="h-48 w-32 flex relative snap-center shrink-0 rounded-lg">

                <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.8 }} 
                transition={{ duration: 0.4 }}
                src={image} 
                alt={title} 
                className="absolute h-full rounded-lg z-10" />

                <motion.div className="bg-white relative w-full h-full rounded-lg z-1"></motion.div>
            </Link>
        </>
    )
}

export default SmallCard;