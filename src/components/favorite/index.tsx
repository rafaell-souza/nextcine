"use client";

import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import FavoriteMovie from "@/actions/favorite";
import UnfavoriteMovie from "@/actions/unfavorite";

import { useState } from "react";
import { motion } from "framer-motion";

const Favorite = ({ style, movieId }: { style: string, movieId: string }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = async () => { await FavoriteMovie(movieId, "1") }
    const handleUnfavorite = async () => { await UnfavoriteMovie(movieId, "1") }

    return (
        <span className={`flex items-center ${style}`}>
            <motion.p
                initial={{ scale: 1 }}
                whileTap={{ scale: 2 }}
                transition={{ duration: 0.8 }}
                onClick={isFavorite ? handleUnfavorite : handleFavorite}
                className={`${!isFavorite ? "text-zinc-900 text-3xl p-1" : "p-2 text-red-500 bg-red-950 text-2xl"} rounded-full transition-colors duration-800`}>

                {!isFavorite ? <MdFavoriteBorder /> : <MdFavorite />}

            </motion.p>

            <p className="font-bold text-xs ml-2">Favorite</p>
        </span>
    )
}

export default Favorite;