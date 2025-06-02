// import { useState, useRef, useEffect } from "react";
// import { FiSearch, FiFilter } from "react-icons/fi";
// import { FaUserCircle, FaSignOutAlt, FaFileAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   //   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//   };

//   //   useEffect(() => {
//   //     const handleClickOutside = (e) => {
//   //       if (menuRef.current && !menuRef.current.contains(e.target)) {
//   //         setMenuOpen(false);
//   //       }
//   //     };
//   //     document.addEventListener("mousedown", handleClickOutside);
//   //     return () => document.removeEventListener("mousedown", handleClickOutside);
//   //   }, []);

//   return (
//     // <header className="w-full bg-gray-200 shadow-md px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-md">
//     <div >
//       <header className="w-full  fixed  bg-gray-200 shadow-md px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div className="text-2xl font-semibold text-gray-800">ATS Header</div>

//         <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
//           <div className="flex flex-grow min-w-[150px] sm:w-72 bg-gray-100 rounded-md overflow-hidden shadow-inner">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search"
//               className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//               aria-label="Search input"
//             />
//             <button
//               onClick={handleSearch}
//               className="bg-blue-600 text-white px-3 sm:px-4 hover:bg-blue-700 transition-colors flex items-center justify-center"
//               aria-label="Search button"
//             >
//               <FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>
//           </div>

//           <button
//             className="flex items-center justify-center gap-1 sm:gap-2 bg-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-400 transition text-sm sm:text-base min-w-[70px]"
//             onClick={() => console.log("Filter clicked")}
//             aria-label="Filter button"
//           >
//             <FiFilter className="w-4 h-4 sm:w-5 sm:h-5" />
//             <span className="hidden xs:inline">Filter</span>
//           </button>

//           <div
//             className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer hover:opacity-90 transition flex-shrink-0"
//             // onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="User profile"
//           >
//             PM
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FiSearch, FiFilter } from "react-icons/fi";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//     // Implement actual search logic here
//   };

//   return (
//   <div className="pl-42">
//     <header className=" w-6xl bg-gray-200 shadow-md  px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-md">
//       <div className="text-2xl font-semibold text-gray-800">ATS Header</div>

//       <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
//         <div className="flex flex-grow min-w-[150px] sm:w-72 bg-gray-100 rounded-md overflow-hidden shadow-inner">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search"
//             className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             aria-label="Search input"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 text-white px-3 sm:px-4 hover:bg-blue-700 transition-colors flex items-center justify-center"
//             aria-label="Search button"
//           >
//             <FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
//           </button>
//         </div>

//         <button
//           className="flex items-center justify-center gap-1 sm:gap-2 bg-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-400 transition text-sm sm:text-base min-w-[70px]"
//           onClick={() => console.log("Filter clicked")}
//           aria-label="Filter button"
//         >
//           <FiFilter className="w-4 h-4 sm:w-5 sm:h-5" />
//           <span className="hidden xs:inline">Filter</span>
//         </button>

//         <div
//           className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer hover:opacity-90 transition flex-shrink-0"
//           // onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="User profile"
//         >
//           PM
//         </div>
//       </div>
//     </header>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FiSearch, FiFilter } from "react-icons/fi";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//     // Implement actual search logic here
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-30 bg-gray-200 shadow-md px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
//       {/* Logo / Title */}
//       <div className="text-2xl font-semibold text-gray-800 select-none">
//         ATS Header
//       </div>

//       {/* Search, Filter, and Profile group */}
//       <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
//         {/* Search box */}
//         <div className="flex flex-grow min-w-[150px] sm:w-72 bg-gray-100 rounded-md overflow-hidden shadow-inner">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search"
//             className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             aria-label="Search input"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 text-white px-3 sm:px-4 hover:bg-blue-700 transition-colors flex items-center justify-center"
//             aria-label="Search button"
//           >
//             <FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
//           </button>
//         </div>

//         {/* Filter Button */}
//         <button
//           className="flex items-center justify-center gap-1 sm:gap-2 bg-gray-300 text-gray-700 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-400 transition text-sm sm:text-base min-w-[70px]"
//           onClick={() => console.log("Filter clicked")}
//           aria-label="Filter button"
//         >
//           <FiFilter className="w-4 h-4 sm:w-5 sm:h-5" />
//           <span className="hidden xs:inline">Filter</span>
//         </button>

//         {/* User Avatar */}
//         <div
//           className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer hover:opacity-90 transition flex-shrink-0 select-none"
//           aria-label="User profile"
//         >
//           PM
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FiSearch, FiFilter, FiMenu } from "react-icons/fi";

// const Header = ({ toggleSidebar }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-md px-4 py-3 flex items-center justify-between gap-3 w-full h-14">
//       {/* Hamburger menu for mobile */}
//       <button
//         className="md:hidden p-2 rounded-md hover:bg-gray-300"
//         onClick={toggleSidebar}
//         aria-label="Toggle sidebar"
//       >
//         <FiMenu className="w-6 h-6" />
//       </button>

//       {/* Logo / Title */}
//       <div className="text-2xl font-semibold text-gray-800 select-none">
//         ATS Header
//       </div>

//       {/* Search and other controls */}
//       <div className="hidden sm:flex items-center gap-2 flex-grow max-w-xl">
//         <div className="flex flex-grow bg-gray-100 rounded-md overflow-hidden shadow-inner">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search"
//             className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm sm:text-base"
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             aria-label="Search input"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 text-white px-3 sm:px-4 hover:bg-blue-700 transition-colors flex items-center justify-center"
//             aria-label="Search button"
//           >
//             <FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
//           </button>
//         </div>

//         <button
//           className="flex items-center justify-center gap-1 bg-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400 transition text-sm sm:text-base min-w-[70px]"
//           onClick={() => console.log("Filter clicked")}
//           aria-label="Filter button"
//         >
//           <FiFilter className="w-4 h-4 sm:w-5 sm:h-5" />
//           <span className="hidden xs:inline">Filter</span>
//         </button>

//         <div
//           className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer hover:opacity-90 transition flex-shrink-0 select-none"
//           aria-label="User profile"
//         >
//           PM
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FiSearch, FiFilter, FiMenu } from "react-icons/fi";

// const Header = ({ toggleSidebar }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-md px-4 py-3 flex items-center justify-between w-full h-16">
//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden p-2 rounded-md hover:bg-gray-300"
//         onClick={toggleSidebar}
//         aria-label="Toggle sidebar"
//       >
//         <FiMenu className="w-6 h-6" />
//       </button>

//       {/* Title - centered on mobile, left on larger screens */}
//       <div className="text-xl font-semibold text-gray-800 flex-1 text-center md:text-left md:flex-none">
//         ATS Header
//       </div>

//       {/* Desktop Search & Controls */}
//       <div className="hidden md:flex items-center gap-3 flex-1 justify-end max-w-2xl">
//         {/* Search bar */}
//         <div className="flex bg-gray-100 rounded-md shadow-inner overflow-hidden flex-grow">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search"
//             className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm"
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             aria-label="Search input"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 text-white px-3 hover:bg-blue-700 transition-colors flex items-center justify-center"
//             aria-label="Search"
//           >
//             <FiSearch className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Filter Button */}
//         <button
//           className="flex items-center gap-1 bg-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400 transition text-sm"
//           onClick={() => console.log("Filter clicked")}
//           aria-label="Filter"
//         >
//           <FiFilter className="w-5 h-5" />
//           <span className="hidden sm:inline">Filter</span>
//         </button>

//         {/* Profile Circle */}
//         <div
//           className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer hover:opacity-90 transition"
//           aria-label="User profile"
//         >
//           PM
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;








































import React, { useState } from "react";
import { FiSearch, FiFilter, FiMenu, FiX } from "react-icons/fi";

const Header = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // aap yahan search action kar sakte ho
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-md px-4 py-3 flex items-center justify-between w-full h-16">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-300"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {/* Title */}
      <div className="text-xl font-semibold text-gray-800 flex-1 text-center md:text-left md:flex-none">
        ATS Header
      </div>

      {/* Desktop Search & Controls */}
      <div className="hidden md:flex items-center gap-3 flex-1 justify-end max-w-2xl">
        {/* Search bar */}
        <div className="flex bg-gray-100 rounded-md shadow-inner overflow-hidden flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            aria-label="Search input"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-3 hover:bg-blue-700 transition-colors flex items-center justify-center"
            aria-label="Search"
          >
            <FiSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="flex items-center gap-1 bg-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400 transition text-sm"
          onClick={() => console.log("Filter clicked")}
          aria-label="Filter"
        >
          <FiFilter className="w-5 h-5" />
          <span className="hidden sm:inline">Filter</span>
        </button>

        {/* Profile Circle */}
        <div
          className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm cursor-pointer hover:opacity-90 transition"
          aria-label="User profile"
        >
          PM
        </div>
      </div>

      {/* Mobile Search Button & Input */}
      <div className="md:hidden flex items-center space-x-2">
        {!showMobileSearch && (
          <button
            onClick={() => setShowMobileSearch(true)}
            aria-label="Open search"
            className="p-2 rounded-md hover:bg-gray-300"
          >
            <FiSearch className="w-6 h-6" />
          </button>
        )}

        {showMobileSearch && (
          <div className="flex items-center bg-gray-100 rounded-md shadow-inner overflow-hidden flex-grow max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="flex-grow px-3 py-2 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                  setShowMobileSearch(false);
                }
                if (e.key === "Escape") {
                  setShowMobileSearch(false);
                }
              }}
              autoFocus
              aria-label="Mobile search input"
            />
            <button
              onClick={() => {
                handleSearch();
                setShowMobileSearch(false);
              }}
              className="bg-blue-600 text-white px-3 hover:bg-blue-700 transition-colors flex items-center justify-center"
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Close search"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
