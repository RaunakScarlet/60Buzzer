import React from 'react'
import logo from '/logo.webp'

const Navbar = () => {
  return (
      <header className="h-20 shadow-sm flex items-center  border-red-300">
          <nav className="flex justify-between items-center w-[90%] mx-auto">
              <a href="/" className="">
                  <img className="w-16 h-16 rounded-full" src={logo} alt="logo" />
              </a>
              <div className="flex items-center">
                  <ul className=" sm:flex items-center gap-5 sm:gap-10 text-lg ">
                      {/* <li>How it works?</li>
                      <li>Features</li>
                      <li>About us</li> */}
                  </ul>
              </div>
              {/* <button className="border border-red-300 rounded text-lg">
                  Login
              </button> */}
          </nav>
      </header>
  );
}

export default Navbar
