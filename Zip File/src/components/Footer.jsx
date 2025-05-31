// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Footer = () => {
// //   return (
// //     <footer className="w-full fixed  bg-gray-200 shadow-lg text-gray-800 px-4 py-6 rounded-md">
// //       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ">
// //         <div className="flex  flex-wrap items-center gap-1 font-bold text-xl">
// //           <span>2025 ©</span>
// //           <Link to="/" className="hover:text-blue-400 transition-colors">
// //             NRT
// //           </Link>
// //         </div>

// //         <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
// //           <Link
// //             to="/docs"
// //             className="hover:text-blue-400 transition-colors font-bold text-xl"
// //           >
// //             Docs
// //           </Link>
// //           <Link
// //             to="/purchase"
// //             className="hover:text-blue-400 transition-colors font-bold text-xl"
// //           >
// //             Purchase
// //           </Link>
// //           <Link
// //             to="/faq"
// //             className="hover:text-blue-400 transition-colors font-bold text-xl"
// //           >
// //             FAQ
// //           </Link>
// //           <Link
// //             to="/support"
// //             className="hover:text-blue-400 transition-colors font-bold text-xl"
// //           >
// //             Support
// //           </Link>
// //           <Link
// //             to="/license"
// //             className="hover:text-blue-400 transition-colors font-bold text-xl"
// //           >
// //             License
// //           </Link>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="w-full fixed left-0 bottom-0 bg-gray-200 shadow-lg text-gray-800 px-4 py-6">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
//         <div className="flex flex-wrap items-center gap-1 font-bold text-xs justify-start mr-5">
//           <span>2025 ©</span>
//           <Link to="/" className="hover:text-blue-400 transition-colors">
//             NRT
//           </Link>
//         </div>

//         <div className="flex flex-wrap gap-4 justify-end sm:justify-end ml-11">
//           <Link
//             to="/docs"
//             className="hover:text-blue-400 transition-colors font-bold text-xs"
//           >
//             Docs
//           </Link>
//           <Link
//             to="/purchase"
//             className="hover:text-blue-400 transition-colors font-bold text-xs"
//           >
//             Purchase
//           </Link>
//           <Link
//             to="/faq"
//             className="hover:text-blue-400 transition-colors font-bold text-xs"
//           >
//             FAQ
//           </Link>
//           <Link
//             to="/support"
//             className="hover:text-blue-400 transition-colors font-bold text-xs"
//           >
//             Support
//           </Link>
//           <Link
//             to="/license"
//             className="hover:text-blue-400 transition-colors font-bold text-xs"
//           >
//             License
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
















import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full fixed left-0 bottom-0 bg-gray-200 shadow-lg text-gray-800 px-4 py-4 z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-1 font-semibold">
          <span>2025 ©</span>
          <Link to="/" className="hover:text-blue-500 transition-colors">
            NRT
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap gap-3 sm:gap-5 justify-center sm:justify-end font-semibold">
          <Link to="/docs" className="hover:text-blue-500 transition-colors">
            Docs
          </Link>
          <Link to="/purchase" className="hover:text-blue-500 transition-colors">
            Purchase
          </Link>
          <Link to="/faq" className="hover:text-blue-500 transition-colors">
            FAQ
          </Link>
          <Link to="/support" className="hover:text-blue-500 transition-colors">
            Support
          </Link>
          <Link to="/license" className="hover:text-blue-500 transition-colors">
            License
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
