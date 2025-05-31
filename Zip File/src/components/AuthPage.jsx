import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simulate login/register
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Redirect to protected home route
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden bg-white">
        {/* Left Side */}
        <div className="lg:w-1/2 bg-indigo-600 text-white flex flex-col justify-between p-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-black">ATS </span>For NRT
            </h1>
            <p className="text-lg font-light">
              a home for teamwork, where everyone comes together
            </p>
          </div>
          <p className="text-sm mt-auto">
            experiencing issues? <br /> get assistance via{" "}
            <a href="#" className="underline">
              support@nrt.com
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="mb-6 flex space-x-4 justify-center">
            <button
              className={`px-4 py-2 rounded-full ${
                isLogin
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                !isLogin
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-2">
            {isLogin ? "Login" : "Register"}
          </h2>
          <p className="text-center text-gray-500 mb-6">
            {isLogin
              ? "we’ll get you back to the app in just a minute."
              : "let's get you set up to join the app."}
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <input
              type="password"
              placeholder={isLogin ? "Password" : "Create Password"}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            {isLogin && (
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="stayLoggedIn" />
                <label htmlFor="stayLoggedIn" className="text-sm">
                  Stay logged in
                </label>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
