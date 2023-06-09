import { merriWeather } from "@/app/layout";
import Image from "next/image";

interface MovieCardProps {
    title: string;
    overview: string;
    posterPath: string;
}

export default function MovieCard({ title, overview, posterPath }: MovieCardProps) {
    const imgUrl = posterPath ?
        `https://image.tmdb.org/t/p/w500${posterPath}`
        : '/no-image-available.png';
    return (
        <div className="bg-white rounded shadow p-4">
            <img className="w-full rounded mb-4" src={imgUrl} alt="" />
            <h2 className={`${merriWeather.className} text-2xl text-rose-600 font-bold mb-2`}>{title}</h2>
            <p className="text-sm text-gray-500">{overview.substring(0, 150)}</p>
        </div>
    )
}
