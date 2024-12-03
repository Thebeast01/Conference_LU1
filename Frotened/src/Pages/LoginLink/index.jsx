import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'animate.css';
import Raashee from '/src/assets/Raashee.jpg';

const LoginLink = () => {
  const [showOutlet, setShowOutlet] = useState(false);

  const handleLoginClick = () => {
    setShowOutlet(true);
  };

  return (
    <div className="h-screen w-full">
      {!showOutlet && (
        <div className="flex flex-col md:flex-row h-screen">
          {/* Left side content */}
          <div className="w-full h-full md:w-1/2 bg-gray-200 flex items-center justify-center">
            <div className="text-center animate__animated animate__fadeInLeft">
              <img
                src={Raashee}
                alt="Logo"
                className="md:w-[400px] w-[250px] mx-auto rounded-full mb-4"
              />
              <h1 className="text-3xl font-bold mb-4">Welcome</h1>
              <p className="md:text-2xl text-lg mb-4">Verify your credentials for abstract submission</p>
            </div>
          </div>

          {/* Right side login link */}
          <div className="w-full md:w-1/2 bg-blue-600 flex items-center justify-center">
            <Link
              to="/lko/rashee2025login"
              className="px-6 py-3 text-white font-semibold text-xl bg-blue-700 hover:bg-blue-800 rounded-md animate__animated animate__fadeInRight animate__delay-1s"
              onClick={handleLoginClick}
            >
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Outlet for login page */}
      {showOutlet && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 bg-white transition-opacity duration-500 ease-in-out opacity-100 animate__animated animate__fadeIn"
        >
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default LoginLink;
