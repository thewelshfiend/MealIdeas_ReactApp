import React from 'react';

const ItemCard = ({ data }) => {
    return (
        <div
            className="relative w-[240px] h-[450PX] rounded-lg overflow-hidden shadow-lg bg-cover bg-center opacity-100"
            style={{ backgroundImage: `url(${data.strMealThumb})` }}
        >
            
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                {data.strMeal}
            </div>
        </div>
    );
};

export default ItemCard;
