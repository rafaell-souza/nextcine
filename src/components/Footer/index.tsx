"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiZod } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiThemoviedatabase } from "react-icons/si";

import { motion } from "framer-motion";

const Footer = ({ style }: { style?: string }) => {
    return (
        <section className={`w-full h-40 flex flex-col ${style}`}>
            <nav className="w-full flex justify-center bg-zinc-950 border-b border-zinc-800 py-2">
                <ul className="flex gap-x-3">
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}>
                        <a href="https://www.linkedin.com/in/rafael-set/" target="_blank">
                            <span className="text-2xl rounded text-zinc-50"> <FaLinkedin /> </span>
                        </a>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}>
                        <a href="https://github.com/rafaell-souza" target="_blank">
                            <span className="text-2xl rounded text-zinc-50"> <FaGithub /> </span>
                        </a>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}>
                        <a href="https://x.com/rafaSouza44" target="_blank">
                            <span className="text-2xl rounded text-zinc-50"> <FaSquareXTwitter /> </span>
                        </a>
                    </motion.li>
                </ul>
            </nav>

            <div className="w-full h-full p-1 grid grid-cols-3 bg-zinc-950">

                <div className="h-full text-white p-1 flex flex-col items-center">
                    <header><h1 className="font-bold text-md">Contact</h1></header>
                    <p>Email: <a className="text-blue-800 text-xs" href="#">rafaellsza03@gmail.com</a> </p>
                    <p className="text-xs">Dev: Rafael Souza</p>
                </div>

                <div className="border-l border-zinc-950 h-full p-1 flex flex-col items-center">
                    <header><h1 className="font-bold text-md text-white">Techs</h1></header>
                    <div className="grid grid-cols-8 gap-3 mt-2">
                        <span className="text-2xl text-white"> <SiTypescript /> </span>
                        <span className="text-2xl text-white"> <FaReact /> </span>
                        <span className="text-2xl text-white"> <RiTailwindCssFill /> </span>
                        <span className="text-2xl text-white"> <FaNodeJs /> </span>
                        <span className="text-2xl text-white"> <SiPrisma /> </span>
                        <span className="text-2xl text-white"> <BiLogoPostgresql /> </span>
                        <span className="text-2xl text-white"> <FaHtml5 /> </span>
                        <span className="text-2xl text-white"> <FaCss3Alt /> </span>
                        <span className="text-2xl text-white"> <SiZod /> </span>
                        <span className="text-2xl text-white"> <TbBrandFramerMotion /> </span>
                        <span className="text-2xl text-white"> <SiNextdotjs /> </span>
                        <span className="text-2xl text-white"> <SiJsonwebtokens /> </span>
                        <span className="text-2xl text-white"> <FaGitAlt /> </span>
                    </div>
                </div>

                <div className="border-l text-white border-zinc-950 h-full p-1 flex flex-col items-center">
                    <header><h1 className="font-bold text-md text-white">Credits</h1></header>
                    <div className="flex flex-col mt-2">
                        <span className="text-3xl flex justify-center text-white"> <SiThemoviedatabase /> </span>
                        <p className="text-sm text-center">All data was provided by <a className="text-blue-700" href="https://www.themoviedb.org/" target="_blank">The Movie Database</a></p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Footer;