'use client';

import { motion } from 'framer-motion';
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { RiMenuUnfold4Fill } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import stateCondition from '../../utilites/stateCondition';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useGenres from '@/hooks/useGenres';

import Link from 'next/link';	

const Toolbar = () => {
    const [ query, setQuery ] = useState<string>("");
    const { isTrue, toggle } = stateCondition();

    const genres = useGenres();

    const router = useRouter();
    return (
        <>
            <div className='fixed z-50 px-1 flex text-white'>
                <button onClick={toggle} className='mr-2'>
                    {isTrue ? <span className='text-2xl'><RiMenuUnfold4Fill /> </ span> : <span className='text-2xl'><RiMenuUnfold3Fill /></span>}
                </button>
                <Link href="/" className='hover:opacity-80 text-2xl'>Cinext</ Link>
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

                    <button className='mt-2 rounded-lg px-6 bg-zinc-900 hover:bg-black hover:border border-zinc-900'>search</button>
                </form>

                <div className='w-full relative top-7'>
                    <h1 className='border-b border-zinc-900 py-1'>Genres:</h1>
                    <div className='w-full grid grid-cols-2 gap-y-2 mt-2 h-40 overflow-y-auto'>
                        {
                            genres?.map((genre, index) => (
                                <button 
                                key={index}
                                onClick={() => router.push(`/genre/${genre.id}`)}
                                className='border border-zinc-900 hover:bg-zinc-900 rounded-lg px-2 py-1 text-[11px]'>{genre.name}</button>
                            ))
                        }
                    </div>
                </div>

                <div className='relative top-14 py-1 bg-zinc-950 hover:bg-black hover:border border-zinc-900 justify-center items-center w-full flex'>
                    <span className="text-white text-2xl"><CgLogOut /></span> <p className='ml-2'>Logout</p>
                </div>

            </motion.section>
        </>
    )
}

export default Toolbar