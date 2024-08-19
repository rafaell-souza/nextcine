'use client';
// animation library
import { motion } from 'framer-motion';

// react-icons
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuUnfold4Fill } from "react-icons/ri";

// helper function
import stateCondition from '../../utilites/stateCondition';

const Toolbar = () => {
    const { isTrue, toggle } = stateCondition();
    return (
        <>
            <div className='fixed z-20 px-1 flex text-white'>
                <button onClick={toggle} className='mr-2'>
                    {isTrue ? <RiMenuUnfold4Fill className="text-2xl" /> : <RiMenuUnfold3Fill className="text-2xl" />}
                </button>
                <h1 className='text-2xl'>NextCine</h1>
            </div>

            <motion.section
                initial={{ x: -170 }}
                animate={{
                    width: isTrue === false ? ["34%", "36%", "0%"] : isTrue && ["0%", "36%", "34%"],
                }}
                transition={{ duration: 0.5, times: [0, 0.5, 1], ease: 'easeInOut' }}
                className='fixed text-white fixed bg-zinc-950 h-screen'>
            </motion.section>
        </>
    )
}

export default Toolbar