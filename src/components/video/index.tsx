"use client";

import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

type Trailer = { key: string }

export default function VideoComponent({
    style,
    trailer
}: {
    style?: string;
    trailer: Trailer;
}) {
    const [videoPage, setVideoPage] = useState<boolean>(false);
    return (
        <section>
            {
                !videoPage ? (
                    <div
                        onClick={() => setVideoPage(true)}
                        className="px-4 py-2 text-white hover:opacity-80 ml-8 rounded flex items-center">
                        <span className="text-3xl"><FaCirclePlay /></span>
                        <p className="ml-2">Trailer</p>
                    </div>
                ) : (
                    <div
                        onClick={() => setVideoPage(false)}
                        className="bg-black w-full h-full mt-3 inset-0 flex justify-center items-center fixed z-40 bg-opacity-90">
                        <iframe
                            className="w-[650px] h-[380px]"
                            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
                            allow="accelerometer; autoplay; fullscreen"
                            allowFullScreen
                            title="YouTube video player">
                        </iframe>
                    </div>
                )
            }
        </section>
    )
}