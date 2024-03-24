import { CgProfile } from "react-icons/cg";
import { FaSitemap } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-PRIMARY-dark  text-WHITE  text-base fixed top-0 left-0 right-0">
      <div className="flex justify-between  items-center max-w-screen-xl mx-auto">
        <ul className="flex justify-between  ">
          <li className="mx-4 py-1">
            <NavLink to="/employees">Employees</NavLink>
          </li>
          <li className="mx-4 py-1">
            <NavLink to="/terminals">Terminal</NavLink>
          </li>
          <li className="mx-4 py-1">
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        </ul>
        <div className="flex  justify-between  items-center  my-4">
          <NavLink
            to="/profile"
            className="px-4 tooltip tooltip-bottom py-1"
            data-tip="Profile"
          >
            <CgProfile />
          </NavLink>
          <NavLink
            to="/site"
            className="px-4 tooltip tooltip-bottom py-1"
            data-tip="Site"
          >
            <FaSitemap />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
