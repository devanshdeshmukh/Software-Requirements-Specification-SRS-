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
import Dashboard from "./pages/Dashboard";
import JobDetails from "./pages/JobDetails";
// // import Candidates from "./pages/dashboard/Candidates";
// // import Interviews from "./pages/dashboard/Interviews";
// // import Reports from "./pages/dashboard/Reports";
// // import Users from "./pages/dashboard/Users";
// // import Settings from "./pages/dashboard/Settings";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/jobs" element={<JobDetails />} />
            {/* <Route path="/dashboard/candidates" element={<Candidates />} /> */}
            {/* <Route path="/dashboard/interviews" element={<Interviews />} /> */}
            {/* <Route path="/dashboard/reports" element={<Reports />} /> */}
            {/* <Route path="/dashboard/users" element={<Users />} /> */}
            {/* <Route path="/dashboard/settings" element={<Settings />} /> */}
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
