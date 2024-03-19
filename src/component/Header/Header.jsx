import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    // <div className=" bg-PRIMARY text-WHITE flex items-center">
    //   <div className="hidden lg:block flex-none  px-10">
    //     <h1 className="text-center ">NAME</h1>
    //   </div>
    //   <nav className="grow">
    //     <div className="lg:hidden text-2xl p-2" onClick={() => setOpen(!open)}>
    //       {open === false ? <SlMenu /> : <RxCross1 />}
    //     </div>
    //     <ul
    //       className={`absolute lg:static flex flex-col lg:flex-row justify-center bg-PRIMARY   duration-1000
    //   ${open ? "top-8" : "-top-40"} left-10 rounded-sm text-WHITE  p-2`}
    //     >
    //       <NavLink
    //         to="/"
    //         className="text-sm lg:text-base px-6 lg:px-10 hover:bg-PRIMARY-light rounded-md"
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         to="/employees"
    //         className="text-sm lg:text-base px-6 lg:px-10 hover:bg-PRIMARY-light rounded-md"
    //       >
    //         Employees
    //       </NavLink>
    //       <NavLink
    //         to="/create"
    //         className="text-sm lg:text-base px-6 lg:px-10  hover:bg-PRIMARY-light rounded-md"
    //         onClick={() => document.getElementById("my_modal_1").showModal()}
    //       >
    //         Create Employee
    //       </NavLink>
    //       <NavLink
    //         to="/signin"
    //         className="text-sm lg:text-base px-6 lg:px-10 hover:bg-PRIMARY-light rounded-md"
    //       >
    //         Sign In
    //       </NavLink>
    //     </ul>
    //   </nav>
    //   <div className="flex-1 flex justify-center">
    //     <h1 className="text-center px-10">Profile</h1>
    //     <h1 className="text-center px-10">Site</h1>
    //   </div>
    // </div>
    <div className="navbar bg-PRIMARY-light  text-WHITE ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-PRIMARY-light  rounded-box w-52"
          >
            <li>
              <NavLink>Employees</NavLink>
            </li>
            <li>
              <NavLink>Create</NavLink>
            </li>
            <li>
              <NavLink>Employees</NavLink>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <NavLink className="btn btn-ghost text-xl">MARVELOUS</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          <li className="mx-4">
            <NavLink className="">Employees</NavLink>
          </li>
          <li className="mx-4">
            <NavLink>Create</NavLink>
          </li>
          <li className="mx-4">
            <NavLink>Employees</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className="px-4">Profile</NavLink>
        <NavLink className="px-4">Sites</NavLink>
      </div>
    </div>
  );
};

export default Header;
