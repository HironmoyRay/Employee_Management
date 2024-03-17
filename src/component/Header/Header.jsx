import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-PRIMARY text-WHITE flex items-center ">
      <div className="flex-none  px-10">
        <h1 className="text-center hidden md:block">NAME</h1>
      </div>
      <nav className="grow">
        <div className="md:hidden text-2xl p-2" onClick={() => setOpen(!open)}>
          {open === false ? <SlMenu /> : <RxCross1 />}
        </div>
        <ul
          className={`absolute md:static flex flex-col md:flex-row justify-center   duration-1000
        ${open ? "top-8" : "-top-40"} left-10
        text-SECONDARY-darkest md:text-WHITE p-2`}
        >
          <NavLink to="/" className="text-sm md:text-base px-10">
            Home
          </NavLink>
          <NavLink to="/employees" className="text-sm md:text-base px-10">
            Employees
          </NavLink>
          <NavLink
            to="/create"
            className="text-sm md:text-base px-10"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Create Employee
          </NavLink>
          <NavLink to="/signin" className="text-sm md:text-base px-10">
            Sign In
          </NavLink>
        </ul>
      </nav>
      <div className="flex-none flex justify-center ">
        <h1 className="text-center px-10">Profile</h1>
        <h1 className="text-center px-10">Site</h1>
      </div>
    </div>
  );
};

export default Header;
