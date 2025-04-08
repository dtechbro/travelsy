import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const gridItems = [
  {
    id: 1,
    title: "Rafting",
    image: "/rafting.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 2,
    title: "Nature Walk",
    image: "/naturewalk.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Bike Riding",
    image: "/bikeriding.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Bungee Jumping",
    image: "/bungeejumpin.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Wine Tasting",
    image: "/winetasting.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Coffee Tasting",
    image: "/coffeetasting.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "Farm Visit",
    image: "/farmvisit.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 8,
    title: "Camping",
    image: "/camping.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 9,
    title: "Kibera Tour",
    image: "/kiberatour.png",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Interests() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <h2 className="text-gray-900 font-medium text-lg my-10">
        What are your interests?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`relative h-full cursor-pointer group ${item.className}`}
            onClick={() => toggleSelection(item.id)}
          >
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay with checkmark */}
              <div
                className={`absolute inset-0 bg-[#FF5200B2] bg-opacity-20 transition-opacity duration-200 ${
                  selectedItems.includes(item.id)
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedItems.includes(item.id) && (
                    <FaCheck className="text-white text-2xl" />
                  )}
                </div>
              </div>
            </div>
            <h3 className="absolute bottom-6 left-6 text-white text-xl font-serif">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      <button className="mt-8 px-12 py-2.5 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors">
        Set
      </button>
    </section>
  );
}
