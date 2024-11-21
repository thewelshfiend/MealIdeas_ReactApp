import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Options.css';
import CarouselComponent from './CarouselComponent';

const Options = () => {
    const { ingredient } = useParams();
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const json = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await json.json();
                if (data.meals) {
                    setOptions(data.meals);
                } else {
                    setError("Please enter a valid ingredient.");
                }
            } catch (err) {
                setError("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [ingredient]);

    return (
        <div id='options'>
            {loading ? <p className='text-center text-lg font-bold'>Loading...</p> :
            (error ? (
                <p className='text-center text-lg font-bold text-cyan-500'>{error}</p>
            ) : (
                <div id='container-options'>
                    {options.length > 0 ? (
                        <CarouselComponent items={options} />
                    ) : (
                        <p className='text-center text-lg font-bold text-orange-600'>No meals available for this ingredient.</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Options;
