import React, { useState, useRef } from "react";
import ItemCard from "./ItemCard";

const CarouselComponent = ({ items }) => {
    const [active, setActive] = useState(2);
    const carouselRef = useRef(null);

    const itemsPerWindow = 5;

    const moveLeft = () => {

        setActive((prev) => {
            const nextActive = prev - 1 < 0 ? items.length - 1 : prev - 1;
            scrollToItem(nextActive);
            return nextActive;
        });
    };

    const moveRight = () => {

        setActive((prev) => {
            const nextActive = (prev + 1) % items.length;
            scrollToItem(nextActive);
            return nextActive;
        });
    };

    const scrollToItem = (index) => {

        const itemWidth = 250;
        const offset = itemWidth * index;
        carouselRef.current.scrollTo({
            left: offset - (itemWidth * Math.floor(itemsPerWindow / 2)),
            behavior: "smooth",
        });
    };

    const generateItems = () => {
        return items.map((item, index) => {
            const position = index - active;
            const isCenter = position === 0;

            return (
                <div
                    key={item.idMeal}
                    className={`transition-all duration-500 transform ${isCenter
                            ? "scale-100 z-11"
                            : `scale-90 opacity-80 translate-x-[-${Math.abs(position)}00px] z-9`
                        }`}
                    style={{

                        width: isCenter ? "300px" : "250px",
                        height: isCenter ? "500px" : "400px",
                    }}
                >
                    <ItemCard data={item} />
                </div>
            );
        });
    };

    return (
        <div className="relative mx-auto w-full h-[500px] bg-transparent select-none">
            <button
                className="absolute w-[40px] h-[40px] bg-white text-teal-700 text-center opacity-70 rounded-full cursor-pointer top-[50%] left-[5%] text-[25px] z-10 transform -translate-y-1/2 hover:opacity-100 transition-opacity"
                onClick={moveLeft}
            >
                &lt;
            </button>

            <div
                ref={carouselRef}
                className="flex justify-between items-center space-x-6 overflow-x-auto px-4 no-scrollbar"
                style={{ scrollBehavior: "smooth" }}
            >
                {generateItems()}
            </div>

            <button
                className="absolute w-[40px] h-[40px] bg-white text-teal-700 text-center opacity-70 rounded-full cursor-pointer top-[50%] right-[5%] text-[25px] z-10 transform -translate-y-1/2 hover:opacity-100 transition-opacity"
                onClick={moveRight}
            >
                &gt;
            </button>
        </div>
    );
};

export default CarouselComponent;
