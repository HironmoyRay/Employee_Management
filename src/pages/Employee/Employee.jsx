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
            <div className="hover:bg-SECONDARY-light px-1 rounded-sm">
              <Edit></Edit>
            </div>
            <div className="hover:bg-SECONDARY-light px-1 rounded-sm">
              <Delete></Delete>
            </div>

            <div className="hover:bg-SECONDARY-light px-1 rounded-sm">
              <Link to="/calender" className="tooltip" data-tip="Timelog">
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
