import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header at Top */}

      <Header />
      <Sidebar />
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

// function App(){
//   return <AuthPage />;
// }

// export default App;
