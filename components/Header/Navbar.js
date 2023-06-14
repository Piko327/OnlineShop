"use client";

import Link from "next/link";
import uniqid from "uniqid";
const Navbar = ({ props }) => {
  return (
    <>
      {
        //Mobile
      }
      <nav
        className={
          props.activeNav
            ? "w-2/3 absolute z-50 flex-col lg:hidden  text-center bg-slate-50 text-gray-600 left-0 top-28  shadow-md border-solid border-b-2 border-r-2 border-gray-400"
            : "hidden"
        }
      >
        <ul className=" flex-col  text-xl font-boldtext-2xl py-12  h-96">
          {[
            ["HOME", "/"],
            ["ABOUT US", "/About"],
            ["SHOP", "/Shop"],
            ["ORDERS", "/Orders"],
          ].map(([title, url]) => (
            <li
              onClick={() => props.activeNavHandler()}
              key={uniqid()}
              className="m-2 p-2 border-solid border-b-2 border-gray-200 hover:text-gray-900 ease-in duration-150"
            >
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className=" hidden lg:block">
        <ul className="flex  font-bold text-gray-600 justify-evenly items-center">
          {[
            ["HOME", "/"],
            ["ABOUT US", "/About"],
            ["SHOP", "/Shop"],
            ["ORDERS", "/Orders"],
          ].map(([title, url]) => (
            <li
              key={uniqid()}
              className="m-2 p-2 hover:text-gray-900 ease-in duration-150"
            >
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
