'use client'

import { ChangeEvent, FormEvent, useState } from "react";

interface SearchSarProps {
    onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchSarProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(query);
    }


    return (
        <form onSubmit={handleSubmit} className="flex items-center w-screen max-w-3xl">
            <input
                type="text"
                className="text-black  rounded-l py-2 pl-2 w-full focus:outline-none"
                value={query}
                onChange={handleChange} />
            <button
                type='submit'
                className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-red-900 focus:outline-none">
                Search
            </button>
        </form>
    )
}
