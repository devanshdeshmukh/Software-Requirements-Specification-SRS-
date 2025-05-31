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
// import Navbar from "./components/Navbar"; // optional

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <Header />

      {/* Optional Navbar */}
      {/* <Navbar /> */}

      {/* Mobile Hamburger button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md bg-white shadow"
        >
          ☰
        </button>
      </div>

      {/* Sidebar (passing all required props) */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-4 py-6 md:ml-[270px] mt-16">
        <h1 className="text-2xl font-bold capitalize">{activePage} Page</h1>
        <p>This is the {activePage} content section.</p>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}

export default App;
