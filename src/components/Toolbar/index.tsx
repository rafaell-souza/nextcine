'use client';

import { motion } from 'framer-motion';
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import stateCondition from '../../utilites/stateCondition';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Toolbar = () => {
    const [ query, setQuery ] = useState<string>("");
    const { isTrue, toggle } = stateCondition();

    const router = useRouter();
    return (
        <>
            <div className='fixed z-50 px-1 flex text-white'>
                <button onClick={toggle} className='mr-2'>
                    {isTrue ? <span className='text-2xl'><RiMenuUnfold4Fill /> </ span> : <span className='text-2xl'><RiMenuUnfold3Fill /></span>}
                </button>
                <h1 className='text-2xl'>NextCine</h1>
            </div>

            <motion.section
                initial={{ x: -200 }}
                animate={{ x: isTrue ? 0 : -200 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className={`${isTrue === null ? "invisible" : "visible"} fixed text-white border-r border-zinc-900 bg-black bg-opacity-90 z-40 h-screen px-2 w-[200px]`}>

                <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    if (query === "") return;
                    router.push(`/search/${query}`);
                }}
                className='flex flex-col items-center w-full h-24 relative top-12'>
                    <input 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text" 
                    className='border w-full bg-black text-sm bg-opacity-0 px-2 text-white outline-none border-zinc-800 h-7 rounded-lg' />

                    <button className='mt-2 rounded-lg px-4 border border-zinc-800 bg-zinc-900'>search</button>
                </form>

            </motion.section>
        </>
    )
}

export default Toolbar