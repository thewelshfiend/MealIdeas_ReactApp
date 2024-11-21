import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-orange-200 shadow-md py-3 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                <img
                    src="/logo.webp"
                    alt="Logo"
                    className="w-10 h-10 object-contain rounded-full"
                />
                <span className="text-xl font-bold text-orange-600">Meal Ideas</span>
            </div>

            <button
                className="flex items-center space-x-2 text-orange-600 hover:text-orange-800 transition"
                onClick={() => navigate("/")}
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
                        d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 21V9a3 3 0 016 0v12"
                    />
                </svg>
                <span className="text-lg font-medium">Home</span>
            </button>
        </nav>
    );
};

export default Navbar;
