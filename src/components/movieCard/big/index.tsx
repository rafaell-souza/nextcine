"use client";

import Link from 'next/link';
import ICard from '@/app/interfaces/ICard';
import MyButton from '@/components/mybutton';

const movieCard = ({ id, title, image, release, overview }: ICard) => {
    return (
        <section className='w-full flex relative justify-end flex shrink-0'>

            <div className=' flex flex-col text-white w-[450px] left-0 absolute h-full z-20 left-10 justify-center'>
                <h1 className='text-4xl mb-3'>{title}</h1>
                <p className='text-lg leading-tight'>{overview?.slice(0, 120) + "..."}</p>

                <div className='flex mt-6'>
                    <Link href={`/movie/${id}`}>
                        <MyButton
                            style='bg-zinc-950 px-5 py-2'
                            handleClick={() => { }}>
                            <p className='text-white'>More info</p>
                        </MyButton>
                    </Link>

                    <MyButton
                        style='border border-zinc-800 ml-2 px-5 py-2'
                        handleClick={() => alert("clicked")}>
                        <p>Trailer</p>
                    </MyButton>
                </div>
            </div>

            <div className='relative'>
                <div className="bg-image-1 absolute w-60 h-full"></div>
                <div className="bg-image-2 absolute w-full h-full"></div>
                <img src={image} alt={title} className='object-cover h-full w-full object-center' />
            </div>
        </section>
    )
}

export default movieCard;