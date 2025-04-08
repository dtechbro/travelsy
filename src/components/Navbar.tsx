import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { PiCaretDown } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <nav className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        <h2 className="text-xl">Travelsy</h2>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-xl text-gray-700" />
        </div>

        {/* Desktop menu and buttons */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-[0.95rem] text-gray-600">
            <li className="cursor-pointer hover:text-gray-900">
              Camping Locations
            </li>
            <li className="cursor-pointer hover:text-gray-900">Activities</li>
            <li className="cursor-pointer hover:text-gray-900">Equipment</li>
            <li className="cursor-pointer hover:text-gray-900">Blogs</li>
          </ul>

          <div className="flex items-center gap-6 pl-8 border-l border-gray-100">
            <button className="flex items-center bg-orange-500 px-5 rounded-full gap-2 text-white py-2 text-sm font-medium hover:bg-orange-600 transition-colors">
              <LuBookmark className="text-lg" />
              Reservations
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <IoSearchOutline className="text-xl text-gray-600" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative w-9 h-9">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white z-10"></div>
                <div className="rounded-full overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <PiCaretDown className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white shadow-lg md:hidden z-50">
            <ul className="flex flex-col py-4">
              <li className="px-6 py-2 hover:bg-gray-50">Camping Locations</li>
              <li className="px-6 py-2 hover:bg-gray-50">Activities</li>
              <li className="px-6 py-2 hover:bg-gray-50">Equipment</li>
              <li className="px-6 py-2 hover:bg-gray-50">Blogs</li>
              <li className="px-6 py-3 border-t border-gray-100 mt-2">
                <button className="flex items-center bg-orange-500 px-4 rounded-full gap-2 text-white py-2 text-sm w-full justify-center font-medium">
                  <LuBookmark className="text-lg" />
                  Reservations
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
