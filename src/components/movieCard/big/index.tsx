"use client";

import Link from 'next/link';
import ICard from '@/app/interfaces/IBigCard';
import MyButton from '@/components/mybutton';

const BigCard = ({ id, title, image, overview }: ICard) => {
    return (
        <section className='w-full flex snap-center relative justify-end flex shrink-0'>

            <div className=' flex flex-col text-white w-[450px] left-0 absolute h-full z-20 left-10 justify-center'>
                <h1 className='text-4xl mb-3'>{title}</h1>
                <p className='text-lg leading-tight'>{overview?.slice(0, 120) + "..."}</p>

                    <Link href={`/movie/${id}`} className='bg-zinc-950 hover:bg-black hover:border hover:border-zinc-900 justify-center flex rounded-lg mt-6 py-2 w-36'>
                            <p className='text-white'>More info</p>
                    </Link>
            </div>

            <div className='relative'>
                <div className="bg-image-1 absolute w-60 h-full"></div>
                <div className="bg-image-2 absolute w-full h-full"></div>
                <img src={image} alt={title} className='object-cover h-full w-full object-center' />
            </div>
        </section>
    )
}

export default BigCard;