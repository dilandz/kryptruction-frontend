import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function ProfileNavbar() {
  const [nav, setNav] = useState(false);
  const openMenu = () => setNav(!nav);

  return (
    <div>
      <div className="px-2 flex justify-between items-center w-full h-full bg-white shadow-md">

        <div className="flex items-center ">
          <img src={logo} alt="Logo" class=" w-40 px-1 py-1" />
        </div>

        <div>
          <ul className="hidden md:flex gap-8 ">
            <li className="hover:shadow-lg rounded-full px-5 py-1">
              <Link to="/home" >Home </Link>
            </li>
            <li className="hover:shadow-lg rounded-full px-5 py-1">
              <Link to="/profile">Account </Link>
            </li>
            <li className="hover:shadow-lg rounded-full px-5 py-1">
              <Link to="/profile/post">Post </Link>
            </li>
            <li className="hover:shadow-lg rounded-full px-5 py-1">
              <Link to="/profile/progress">Work In Progress </Link>
            </li>
            <li className="hover:shadow-lg rounded-full px-5 py-1">
              <Link to="/profile/recurit">Recurits </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="px-4 py-1 mb-3 mt-3 font-medium">Sign Out</button>
        </div>
        <div className="md:hidden" onClick={openMenu}>
          {!nav ? <h3>Menu</h3> : <h3>Close</h3>}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-50 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/home">Home </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/profile">Account</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/profile/post">Post </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/profile/progress">Work In Progress </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/profile/recurit">Recurits </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="px-4 py-1 font-medium">Sign Out</button>
        </div>
      </ul>

    </div>
  );
}

export default ProfileNavbar;