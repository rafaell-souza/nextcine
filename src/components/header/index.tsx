'use client';

import { motion } from "framer-motion";

import MyButton from "../mybutton";
import StateCondition from "@/utilites/stateCondition";

import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { TbLanguageKatakana } from "react-icons/tb";
import { IoMdArrowDropup } from "react-icons/io";

const Header = () => {
    const { isTrue, toggle } = StateCondition();
    return (
        <section className="shadow h-8 z-50 flex justify-end px-10 bg-zinc-900 fixed w-full items-center">

            <div
                onClick={toggle}
                className="flex bg-zinc-800 w-12 relative items-center mr-2 px-2 h-6 rounded-full relative">

                <motion.div
                    initial={{ x: -8 }}
                    animate={{ x: isTrue ? 14 : -8 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-full h-6 w-6 flex justify-center items-center absolute">

                    {
                        isTrue ? <IoSunnySharp className={`z-20 text-yellow-400`} /> : <FaMoon className={`text-blue-100 z-20`} />
                    }

                </motion.div>
            </div>
        </section>
    )
}

export default Header