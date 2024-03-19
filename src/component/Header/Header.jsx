import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-PRIMARY text-WHITE flex items-center">
      <div className="hidden lg:block flex-none  px-10">
        <h1 className="text-center ">NAME</h1>
      </div>
      <nav className="grow">
        <div className="lg:hidden text-2xl p-2" onClick={() => setOpen(!open)}>
          {open === false ? <SlMenu /> : <RxCross1 />}
        </div>
        <ul
          className={`absolute lg:static flex flex-col lg:flex-row justify-center bg-PRIMARY   duration-1000
      ${open ? "top-8" : "-top-40"} left-10 rounded-sm text-WHITE  p-2`}
        >
          <NavLink
            to="/"
            className="text-sm lg:text-base px-6 lg:px-10 hover:bg-PRIMARY-light rounded-md"
          >
            Home
          </NavLink>
          <NavLink
            to="/employees"
            className="text-sm lg:text-base px-6 lg:px-10 hover:bg-PRIMARY-light rounded-md"
          >
            Employees
          </NavLink>
          <NavLink
            to="/create"
            className="text-sm lg:text-base px-6 lg:px-10  hover:bg-PRIMARY-light rounded-md"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Create Employee
          </NavLink>
          <NavLink
            to="/signin"
            className="text-sm lg:text-base px-6 lg:px-10 hover:bg-PRIMARY-light rounded-md"
          >
            Sign In
          </NavLink>
        </ul>
      </nav>
      <div className="flex-1 flex justify-center">
        <h1 className="text-center px-10">Profile</h1>
        <h1 className="text-center px-10">Site</h1>
      </div>
    </div>
  );
};

export default Header;
