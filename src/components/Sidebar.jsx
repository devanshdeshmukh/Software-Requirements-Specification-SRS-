// // import React from "react";

// // const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
// //   const navItems = [
// //     {
// //       name: "Dashboard",
// //       icon: (
// //         <svg
// //           className="w-5 h-5"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
// //           ></path>
// //         </svg>
// //       ),
// //       page: "dashboard",
// //     },
// //     {
// //       name: "Jobs",
// //       icon: (
// //         <svg
// //           className="w-5 h-5"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 10h.01M17 10h.01M6 14h.01M18 14h.01M6 18h.01M18 18h.01L19 18a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2l1-.001z"
// //           ></path>
// //         </svg>
// //       ),
// //       page: "jobs",
// //     },
// //     {
// //       name: "Candidates",
// //       icon: (
// //         <svg
// //           className="w-5 h-5"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.093-1.28.261-1.875M17 20v-2c0-.653-.093-1.28-.261-1.875m0 0a5.002 5.002 0 00-9.478 0m0 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
// //           ></path>
// //         </svg>
// //       ),
// //       page: "candidates",
// //     },
// //     {
// //       name: "Interviews",
// //       icon: (
// //         <svg
// //           className="w-5 h-5"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 16h.01M17 12h.01M17 16h.01M13 12h.01M13 16h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// //           ></path>
// //         </svg>
// //       ),
// //       page: "interviews",
// //     },
// //     {
// //       name: "Reports",
// //       icon: (
// //         <svg
// //           className="w-5 h-5"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
// //           ></path>
// //         </svg>
// //       ),
// //       page: "reports",
// //     },
// //     {
// //       name: "Users",
// //       // Admin specific
// //       icon: (
// //         <svg
// //           className="w-5 h-5"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M12 4.354a4 4 0 110 5.292M12 20v-9.292m0 0a4 4 0 00-4 4v2H8m4-12a4 4 0 004 4v2h-2M4 15h4m-4 0v-2.354M20 15h-4m4 0v-2.354"
// //           ></path>
// //         </svg>
// //       ),
// //       page: "users",
// //       isAdmin: true,
// //     },
// //     {
// //       name: "Settings",
// //       icon: (
// //         <svg
// //           className="w-5 h-5"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.41 2.573-1.065z"
// //           ></path>
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="2"
// //             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
// //           ></path>
// //         </svg>
// //       ),
// //       page: "settings",
// //     },
// //   ];

// //   // Simulate user role (true for Admin, false for HR)
// //   const isAdmin = true; // Set to false to simulate HR role

// //   return (
// //     <>
// //       {/* Overlay for mobile when sidebar is open */}
// //       <div
// //         className={` inset-0 bg-gray-200 bg-opacity-50 z-20 md:hidden  ${
// //           isOpen ? "block" : "hidden"
// //         }`}
// //         onClick={() => setIsOpen(false)}
// //       ></div>

// //       <div className="flex flex-col max-h-screen fixed">
// //         <aside
// //           className={`md:relative h-[768px] w-[270px] bottom-14   right-40 bg-indigo-400 shadow-lg md:shadow-none z-10 transform ${
// //             isOpen ? "translate-x-0" : "-translate-x-full"
// //           } md:translate-x-0 transition-transform duration-300 ease-in-out`}
// //         >
// //           <div className="p-6 ">
// //             <h2 className="text-xl font-bold text-gray-800 mb-6">Navigation</h2>
// //             <nav>
// //               <ul>
// //                 {navItems.map(
// //                   (item) =>
// //                     // Only render 'Users' link if isAdmin is true
// //                     (!item.isAdmin || isAdmin) && (
// //                       <li key={item.page} className="mb-2">
// //                         <button
// //                           onClick={() => {
// //                             setActivePage(item.page);
// //                             setIsOpen(false); // Close sidebar on mobile after selection
// //                           }}
// //                           className={`flex items-center w-full p-3 rounded-md text-left transition-colors duration-200
// //                         ${
// //                           activePage === item.page
// //                             ? "bg-indigo-100 text-indigo-700 font-semibold"
// //                             : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
// //                         }
// //                       `}
// //                         >
// //                           <span className="mr-3">{item.icon}</span>
// //                           {item.name}
// //                         </button>
// //                       </li>
// //                     )
// //                 )}
// //               </ul>
// //             </nav>
// //           </div>
// //         </aside>
// //       </div>
// //     </>
// //   );
// // };

// // export default Sidebar;

// import React, { useState } from "react";
// import { FiSearch, FiFilter, FiMenu, FiX } from "react-icons/fi";

// const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen, isAdmin }) => {
//   const navItems = [
//     {
//       name: "Dashboard",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//           />
//         </svg>
//       ),
//       page: "dashboard",
//     },
//     {
//       name: "Jobs",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 10h.01M17 10h.01M6 14h.01M18 14h.01M6 18h.01M18 18h.01L19 18a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2l1-.001z"
//           />
//         </svg>
//       ),
//       page: "jobs",
//     },
//     {
//       name: "Candidates",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.093-1.28.261-1.875M17 20v-2c0-.653-.093-1.28-.261-1.875m0 0a5.002 5.002 0 00-9.478 0m0 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
//           />
//         </svg>
//       ),
//       page: "candidates",
//     },
//     {
//       name: "Interviews",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 16h.01M17 12h.01M17 16h.01M13 12h.01M13 16h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//       ),
//       page: "interviews",
//     },
//     {
//       name: "Reports",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
//           />
//         </svg>
//       ),
//       page: "reports",
//     },
//     {
//       name: "Users",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 4.354a4 4 0 110 5.292M12 20v-9.292m0 0a4 4 0 00-4 4v2H8m4-12a4 4 0 004 4v2h-2M4 15h4m-4 0v-2.354M20 15h-4m4 0v-2.354"
//           />
//         </svg>
//       ),
//       page: "users",
//       isAdmin: true,
//     },
//     {
//       name: "Settings",
//       icon: (
//         <svg
//           className="w-5 h-5"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.41 2.573-1.065z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//         </svg>
//       ),
//       page: "settings",
//     },
//   ];

//   return (
//     <>
//       {/* Overlay for mobile */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden ${
//           isOpen ? "block" : "hidden"
//         }`}
//         onClick={() => setIsOpen(false)}
//       ></div>

//        <aside
//         className={`abs top-7- w-64 bg-indigo-400 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
//         ${
//           isOpen
//             ? "translate-x-0"
//             : "-translate-x-full"
//         }
//         md:translate-x-0 md:static md:h-[calc(100vh-56px)] md:shadow-none
//         `}
//       > 
     
    
//         {/* Sidebar content */}

//         {/* Sidebar content */}

//         <div className="p-6">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">Navigation</h2>
//           <nav>
//             <ul>
//               {navItems.map(
//                 (item) =>
//                   (!item.isAdmin || isAdmin) && (
//                     <li key={item.page} className="mb-2">
//                       <button
//                         onClick={() => {
//                           setActivePage(item.page);
//                           setIsOpen(false);
//                         }}
//                         className={`flex items-center w-full p-3 rounded-md text-left transition-colors duration-200
//                         ${
//                           activePage === item.page
//                             ? "bg-indigo-100 text-indigo-700 font-semibold"
//                             : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
//                         }`}
//                       >
//                         <span className="mr-3">{item.icon}</span>
//                         {item.name}
//                       </button>
//                     </li>
//                   )
//               )}
//             </ul>
//           </nav>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
















import React from "react";
import { FiX } from "react-icons/fi";

// const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen, isAdmin }) => {
//   const navItems = [
//     {
//       name: "Dashboard",
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//           />
//         </svg>
//       ),
//       page: "dashboard",
//     },
//     {
//       name: "Jobs",
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
//           />
//         </svg>
//       ),
//       page: "jobs",
//     },
//     {
//       name: "Candidates",
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M2 20v-2a3 3 0 015.356-1.857M12 11a4 4 0 110-8 4 4 0 010 8z"
//           />
//         </svg>
//       ),
//       page: "candidates",
//     },
//     {
//       name: "Settings",
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M10.325 4.317a1.724 1.724 0 002.573 1.066 1.724 1.724 0 001.065 2.572 1.724 1.724 0 002.573 1.066M12 15a3 3 0 110-6 3 3 0 010 6z"
//           />
//         </svg>
//       ),
//       page: "settings",
//     },
//     {
//       name: "Users",
//       page: "users",
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 4v1a3 3 0 01-3 3H7m5 0a3 3 0 003-3V4m1 16v-2a4 4 0 00-8 0v2"
//           />
//         </svg>
//       ),
//       isAdmin: true,
//     },
  // ];

























































const Sidebar = ({ activePage, setActivePage, isOpen, setIsOpen, isAdmin }) => {
  const navItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      page: "dashboard",
    },
    {
      name: "Jobs",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 10h.01M17 10h.01M6 14h.01M18 14h.01M6 18h.01M18 18h.01L19 18a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2l1-.001z"
          />
        </svg>
      ),
      page: "jobs",
    },
    {
      name: "Candidates",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.093-1.28.261-1.875M17 20v-2c0-.653-.093-1.28-.261-1.875m0 0a5.002 5.002 0 00-9.478 0m0 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
          />
        </svg>
      ),
      page: "candidates",
    },
    {
      name: "Interviews",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h.01M7 12h.01M7 16h.01M17 12h.01M17 16h.01M13 12h.01M13 16h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      page: "interviews",
    },
    {
      name: "Reports",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      page: "reports",
    },
    {
      name: "Users",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M12 20v-9.292m0 0a4 4 0 00-4 4v2H8m4-12a4 4 0 004 4v2h-2M4 15h4m-4 0v-2.354M20 15h-4m4 0v-2.354"
          />
        </svg>
      ),
      page: "users",
      isAdmin: true,
    },
    {
      name: "Settings",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.41 2.573-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      page: "settings",
    },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className=" fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`  fixed top-0  right-50 z-50 h-screen w-64 bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:z-0`}
      >
        {/* Close Button for Mobile */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-xl text-gray-700" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Navigation</h2>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => {
                if (item.isAdmin && !isAdmin) return null;
                return (
                  <li key={item.page}>
                    <button
                      onClick={() => {
                        setActivePage(item.page);
                        setIsOpen(false);
                      }}
                      className={`flex items-center w-full px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activePage === item.page
                          ? "bg-indigo-100 text-indigo-700"
                          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
















