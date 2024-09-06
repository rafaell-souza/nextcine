'use client';

import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const Header = () => {
    return (
        <section
            className={`w-full h-8 fixed z-50 items-center flex bg-zinc-900`}>
                 <div className='flex gap-x-2 w-full text-white justify-end items-center text-xl px-2'>
                <span className="text-sky-300"> <FaReact /> </span>
                <span className="text-white"> <RiNextjsLine /> </span>
            </div>
        </section>
    )
}

export default Header