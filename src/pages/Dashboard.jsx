import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import DashboardHome from "./dashboard/DashboardHome";
import Jobs from "./job/Jobs";
import Candidates from "./candidate/Candidates";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardHome />;
      case "jobs":
        return <Jobs />;
      case "candidates":
        return <Candidates />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setIsOpen={setIsOpen} />
      <div className="flex flex-1">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
