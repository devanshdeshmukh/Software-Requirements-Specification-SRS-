import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header at Top */}
      <Header />

      {/* Main content placeholder */}
      <main className="flex-1 px-4 py-6">
        <h1 className="text-2xl font-bold text-center"></h1>
      </main>

      {/* Fixed Footer at Bottom */}
      <Footer />
    </div>
  );
}

export default App;

// import React from "react";
// import AuthPage from "./components/AuthPage";

// function App() {
//   return <AuthPage />;
// }

// export default App;


// App.jsx
// src/App.jsx







// import { Routes, Route } from "react-router-dom";
// import AuthPage from "./pages/AuthPage";
// import Home from "./pages/Home"; // Create a dummy Home page for testing
// import ProtectedRoutes from "./ProtectedRoutes";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-1">
//         <Routes>
//           <Route path="/" element={<AuthPage />} />
//           <Route element={<ProtectedRoutes />}>
//             <Route path="/home" element={<Home />} />
//           </Route>
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;


