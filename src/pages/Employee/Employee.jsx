// const details = useLoaderData();

import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";

const Employee = ({ employee }) => {
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

  return (
    <tbody>
      <tr className="hover:bg-SECONDARY-lightest">
        <th>{GUID}</th>
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

export default Employee;
