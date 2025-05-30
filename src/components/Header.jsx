import { useState, useRef, useEffect } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { FaUserCircle, FaSignOutAlt, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //   const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  //   useEffect(() => {
  //     const handleClickOutside = (e) => {
  //       if (menuRef.current && !menuRef.current.contains(e.target)) {
  //         setMenuOpen(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => document.removeEventListener("mousedown", handleClickOutside);
  //   }, []);

  return (
    <header className="w-full bg-gray-200 shadow-md px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-md">
      <div className="text-2xl font-semibold text-gray-800">ATS Header</div>

      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        <div className="flex flex-grow min-w-[150px] sm:w-72 bg-gray-100 rounded-md overflow-hidden shadow-inner">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            aria-label="Search input"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-3 sm:px-4 hover:bg-blue-700 transition-colors flex items-center justify-center"
            aria-label="Search button"
          >
            <FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <button
          className="flex items-center justify-center gap-1 sm:gap-2 bg-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-400 transition text-sm sm:text-base min-w-[70px]"
          onClick={() => console.log("Filter clicked")}
          aria-label="Filter button"
        >
          <FiFilter className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden xs:inline">Filter</span>
        </button>

        <div
          className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer hover:opacity-90 transition flex-shrink-0"
          // onClick={() => setMenuOpen(!menuOpen)}
          aria-label="User profile"
        >
          PM
        </div>
      </div>
    </header>
  );
};

export default Header;
