export default function Hero() {
  return (
    <header className="pt-16 pb-8 max-w-7xl mx-auto px-6">
      <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight">
        Find An
        <br />
        Experience
      </h1>

      <p className="mt-6 text-gray-600 text-base max-w-2xl">
        To find you the best experiences, we will ask you a few questions to
        find show you experiences based on your preferences.
      </p>

      <div className="mt-12">
        <h2 className="text-gray-900 font-medium text-lg">
          How much time do you have?
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-4 mt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="timeframe"
              className="w-4 h-4 border-2 border-gray-300 rounded-full"
            />
            <span className="text-gray-600">A weekend</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="timeframe"
              className="w-4 h-4 border-2 border-gray-300 rounded-full"
            />
            <span className="text-gray-600">A week</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="timeframe"
              className="w-4 h-4 border-2 border-gray-300 rounded-full"
            />
            <span className="text-gray-600">A month</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="timeframe"
              className="w-4 h-4 border-2 border-gray-300 rounded-full"
            />
            <span className="text-gray-600">A few days, specify</span>
          </label>
        </div>
      </div>
    </header>
  );
}
