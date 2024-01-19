import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="navbar flex items-center justify-between flex-wrap bg-gradient-to-b from-yellow-300 p-6">
        <img src="./sexDiscoLogo.png" alt="logo" className="w-72" />

        <div className="w-full hidden lg:flex lg:items-center lg:w-auto">

            <div className="text-base items-center lg:flex-grow">
                <a href="#"
                    className=" block mt-4 lg:inline-block lg:mt-0 text-zinc-700 hover:-translate-y-1 hover:scale-110 m-4">
                    Vinilos 
                </a>
                <a href="#" 
                    className=" block mt-4 lg:inline-block lg:mt-0 text-zinc-700 hover:-translate-y-1 hover:scale-110 m-4">
                    CDs 
                </a>
                <a href="#" 
                    className=" block mt-4 lg:inline-block lg:mt-0 text-zinc-700 hover:-translate-y-1 hover:scale-110 m-4">
                    Cassettes 
                </a>
                <a href="#"
                    className=" block mt-4 lg:inline-block lg:mt-0 text-zinc-700 hover:-translate-y-1 hover:scale-110 m-4">
                    Camisetas 
                </a>

                <a href="#">
                    <CartWidget/>
                </a>

            </div>
        </div>












      </nav>
    </>
  );
};

export default NavBar;
