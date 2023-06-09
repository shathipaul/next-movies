'use client'
import searchMovies from "@/services/movie.services";
import { useState } from "react"
import MovieCard from "./MovieCard";
import { SearchBar } from "./SearchBar";

export default function MovieSearch() {
    const [movies, setMovies] = useState([]);

    const handleSearch = async (query: string) => {
        const data = await searchMovies(query);
        setMovies(data);
    }
    console.log(movies)
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {
                    movies?.map((movie: any) => <MovieCard key={movie.id} title={movie.title} overview={movie.overview} posterPath={movie.poster_path} />
                    )}
            </div>
        </div>
    )
}
