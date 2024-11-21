import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return;
        navigate(`/options/${value}`);
    };

    return (
        <div className="flex justify-center mt-6 px-4 sm:px-6">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center w-full max-w-sm sm:max-w-md bg-white shadow-md rounded-full border border-gray-300 overflow-hidden"
            >
                <input
                    type="text"
                    placeholder="Search an ingredient..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full sm:flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                    autoFocus
                />
                <button
                    type="submit"
                    className="mt-2 sm:mt-0 px-4 py-2 sm:py-2 bg-orange-600 hover:bg-orange-700 transition text-white rounded-full sm:rounded-none sm:rounded-r-full flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 19c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
