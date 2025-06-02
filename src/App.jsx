// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Fixed Header at Top */}

//       <Header />
//       <Sidebar />
//       {/* Main content placeholder */}
//       <main className="flex-1 px-4 py-6">
//         <h1 className="text-2xl font-bold text-center"></h1>
//       </main>

//       {/* Fixed Footer at Bottom */}
//       <Footer />
//     </div>

//   );
// }

// export default App;

// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Fixed Header at Top */}
//       <Header />
//       {/* <Navbar /> */}
//       <Sidebar />
//       {/* Main content placeholder */}
//       <main className="flex-1 px-4 py-6">
//         <h1 className="text-2xl font-bold text-center"></h1>
//       </main>
//       {/* Fixed Footer at Bottom */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

import DashboardHome from "./pages/dashboard/DashboardHome";
import Jobs from "./pages/dashboard/Jobs";
import Candidates from "./pages/dashboard/Candidates";
import Interviews from "./pages/dashboard/Interviews";
import Reports from "./pages/dashboard/Reports";
import Users from "./pages/dashboard/Users";
import Settings from "./pages/dashboard/Settings";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-6 bg-gray-50 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;


// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import { useState } from "react";

// import DashboardHome from "./pages/dashboard/DashboardHome";
// import Jobs from "./pages/dashboard/Jobs";
// import Candidates from "./pages/dashboard/Candidates";
// import Interviews from "./pages/dashboard/Interviews";
// import Reports from "./pages/dashboard/Reports";
// import Users from "./pages/dashboard/Users";
// import Settings from "./pages/dashboard/Settings";

// function App() {
//   const [activePage, setActivePage] = useState("dashboard");
//   const [isOpen, setIsOpen] = useState(false);

//   const renderPage = () => {
//     switch (activePage) {
//       case "dashboard":
//         return <DashboardHome />;
//       case "jobs":
//         return <Jobs />;
//       case "candidates":
//         return <Candidates />;
//       case "interviews":
//         return <Interviews />;
//       case "reports":
//         return <Reports />;
//       case "users":
//         return <Users />;
//       case "settings":
//         return <Settings />;
//       default:
//         return <DashboardHome />;
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header setIsOpen={setIsOpen} />
//       <div className="flex flex-1">
//         <Sidebar
//           activePage={activePage}
//           setActivePage={setActivePage}
//           isOpen={isOpen}
//           setIsOpen={setIsOpen}
//         />
//         <main className="flex-1 px-4 py-6 bg-gray-50 overflow-y-auto">
//           {renderPage()}
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


