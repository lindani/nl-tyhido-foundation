// src/components/ui/Carousel.jsx
import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Carousel = ({ items = [], renderGroup, className = "" }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {items.map((group, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-full px-4"
          >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 [&>*]:h-[300px]">

              {renderGroup(group, index)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => scroll("left")}
          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
