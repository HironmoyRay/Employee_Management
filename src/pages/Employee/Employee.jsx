import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";

const Employee = ({ employee, isAllSelected }) => {
  const {
    GUID,
    EID,
    Name,
    First_Name,
    Last_Name,
    Email,
    Join_Date,
    Terminal,
    Created,
  } = employee;

  const [isSelected, setIsSelected] = useState(false);

  // Update the selected state based on isAllSelected prop
  useEffect(() => {
    setIsSelected(isAllSelected);
  }, [isAllSelected]);
  

  const handleCheckboxClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <tbody>
      <tr
        className={`hover:bg-SECONDARY-lightest ${
          isSelected || isAllSelected ? "bg-YELLOW-light hover:bg-YELLOW" : " "
        } `}
      >
        <td>
          <input
            type="checkbox"
            onChange={handleCheckboxClick}
            checked={isSelected}
            name=""
            id=""
          />
        </td>
        <th>
          <span className="font-mono text-SECONDARY">
            {GUID && GUID.substring(0, 6).toUpperCase()}
          </span>
        </th>
        <td>{EID}</td>
        <td>{Name}</td>
        <td>{First_Name}</td>
        <td>{Last_Name}</td>
        <td>{Email}</td>
        <td>{Join_Date}</td>
        <td>{Terminal}</td>
        <td>{Created}</td>
        <td>
          <div className="flex items-center justify-between ">
            <div>
              <Edit></Edit>
            </div>
            <div>
              <Delete></Delete>
            </div>

            <div className="">
              <Link
                to="/calender"
                className="tooltip hover:bg-SECONDARY-light p-1 rounded-sm"
                data-tip="Timelog"
              >
                <SlCalender />
              </Link>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

Employee.propTypes = {
  employee: PropTypes.object.isRequired,
  isAllSelected: PropTypes.bool.isRequired,
  GUID: PropTypes.number,
  EID: PropTypes.number,
  Name: PropTypes.string,
  First_Name: PropTypes.string,
  Last_Name: PropTypes.string,
  Email: PropTypes.func,
  Join_Date: PropTypes.string,
  Terminal: PropTypes.string,
  Created: PropTypes.string,
};

export default Employee;
