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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-4 py-6 bg-gray-50 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/jobs" element={<Jobs />} />
            <Route path="/dashboard/candidates" element={<Candidates />} />
            <Route path="/dashboard/interviews" element={<Interviews />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/settings" element={<Settings />} />
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


