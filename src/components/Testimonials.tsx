import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";
import { useState } from "react";

const testimonialsData = [
  {
    title: "Best User Experience",
    content:
      'Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others hold firm. This variation in erosion speed causes the formation of pinnacles, or "hoodoos" of stable rock.',
    name: "Derek Dunn",
    image: "/Derek.png",
  },
  {
    title: "Friendly staff",
    content:
      "Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It's also big tour business and the are many options.",
    name: "Derek Dunn",
    image: "/Derek.png",
  },
  {
    title: "Memorable Experience",
    content:
      "Travelsy planned the perfect family vacation for us. Every detail was taken care of, from the activities to the logistics. We had a stress-free, fun-filled holiday!",
    name: "Shaggi Martinez",
    image: "/Derek.png",
  },
  {
    title: "Great Service",
    content:
      "The team at Travelsy went above and beyond to ensure we had an unforgettable experience. Their attention to detail and personalized service made all the difference.",
    name: "Shaggi Martinez",
    image: "/Derek.png",
  },
  {
    title: "Amazing Experience",
    content:
      "I can't thank Travelsy enough for the incredible trip they organized for us. The itinerary was well thought out, and every moment was filled with adventure and joy.",
    name: "Shaggi Martinez",
    image: "/Derek.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 2 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonialsData.length - 2 ? 0 : prev + 1
    );
  };

  return (
    <section className="mt-16 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full">
          <p className="uppercase text-gray-500 text-sm mb-8">Testimonials</p>

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start text-center lg:text-left">
            {/* Left side with title and controls */}
            <div className="flex flex-col items-start gap-8 lg:w-1/4">
              <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-gray-800 leading-tight">
                What
                <br />
                customers
                <br />
                <span className="text-orange-600">say about us.</span>
              </h1>

              <div className="flex items-center gap-6 bg-white p-2 rounded">
                <button
                  onClick={handlePrevious}
                  className="p-3 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <PiCaretLeftThin className="text-2xl text-gray-600" />
                </button>
                <div className="w-px h-6 bg-gray-300"></div>
                <button
                  onClick={handleNext}
                  className="p-3 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <PiCaretRightThin className="text-2xl text-gray-600" />
                </button>
              </div>
            </div>

            {/* Testimonial cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[0, 1].map((offset) => {
                const index = (currentIndex + offset) % testimonialsData.length;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-sm"
                  >
                    <h2 className="text-2xl font-serif font-semibold mb-4">
                      {testimonialsData[index].title}
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {testimonialsData[index].content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={testimonialsData[index].image}
                          alt={testimonialsData[index].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium">
                        {testimonialsData[index].name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
