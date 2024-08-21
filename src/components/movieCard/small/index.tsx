"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import ISmallCard from "@/app/interfaces/ISmallCard";
import MyButton from "@/components/mybutton";

const SmallCard = ({ id, title, image, rate }: ISmallCard) => {
    return (
        <>
            <Link
                href={`/movie/${id}`}
                className="h-48 w-32 flex relative snap-center shrink-0 rounded-lg">

                <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.8 }} 
                transition={{ duration: 0.4 }}
                src={image} 
                alt={title} 
                className="absolute h-full rounded-lg z-20" />

                <motion.div className="bg-white relative w-full h-full rounded-lg z-10"></motion.div>
            </Link>
        </>
    )
}

export default SmallCard;