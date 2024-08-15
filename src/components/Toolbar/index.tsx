'use client';
// animation library
import { motion } from 'framer-motion';
// react-icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
// helper function
import ToolbarController from './helper';

const Toolbar = () => {
    const { isOpen, toggle } = ToolbarController();
    return (
        <>
            <header className='text-2xl justify-between fixed left-2 z-10 items-center flex'>
                <p>NextCine</p>
                <IoIosArrowDropleftCircle
                    className={`text-2xl text-zinc-400 ml-2 ${!isOpen ? 'rotate-180' : ''}`}
                    onClick={toggle} />
            </header>

            <motion.section
                className='w-40 bg-zinc-100 relative shadow-[1px_1px_8px] shadow-zinc-300 h-screen px-1 rounded-e-lg rounded-ee-lg'
                initial={{ x: -170 }}
                animate={{ x: isOpen ? [-170, 10, 0] : isOpen === false && [0, 10, -170] }}
                transition={{ duration: 0.5, times: [0, 0.7, 1], ease: 'easeOut' }}
            >
            </motion.section>
        </>
    )
}

export default Toolbar