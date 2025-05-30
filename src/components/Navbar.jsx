// const Navbar = ({ toggleSidebar }) => {
//   return (
//     <header className="bg-white shadow-sm py-4 px-6 md:px-8 flex justify-between items-center rounded-b-lg z-10">
//       <div className="flex items-center">
//         {/* Mobile Sidebar Toggle */}
//         <button
//           onClick={toggleSidebar}
//           className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none mr-4"
//           aria-label="Toggle sidebar"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//         {/* Company Logo/Name */}
//         <a href="#" className="text-2xl font-bold text-indigo-600">NewRise ATS</a>
//       </div>
//       <div className="flex items-center space-x-4">
//         {/* Notifications Icon */}
//         <button className="relative text-gray-600 hover:text-indigo-600 focus:outline-none">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"></path>
//           </svg>
//           <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
//         </button>
//         {/* User Profile/Avatar */}
//         <div className="relative group">
//           <button className="flex items-center space-x-2 focus:outline-none">
//             <img src="https://placehold.co/40x40/E0E7FF/4F46E5?text=JD" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-indigo-300" />
//             <span className="hidden md:block text-gray-700 font-medium">John Doe</span>
//             <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </button>
//           {/* Dropdown Menu */}
//           <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 origin-top-right">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
//             <hr className="border-gray-200 my-1" />
//             <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };