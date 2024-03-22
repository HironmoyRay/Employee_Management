// const details = useLoaderData();
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdTerminal } from "react-icons/md";

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
        <th >{GUID}</th>
        <td >{EID}</td>
        <td >{Name}</td>
        <td >{First_Name}</td>
        <td >{Last_Name}</td>
        <td >{Email}</td>
        <td >{Join_Date}</td>
        <td >{Terminal}</td>
        <td >{Created}</td>
        <td >
          <div className="flex items-center justify-between ">
            <div>
              <a href="" className="tooltip" data-tip="Edit">
                <CiEdit />
              </a>
            </div>
            <div>
              <a href="" className="tooltip" data-tip="Delete">
                <MdDelete />
              </a>
            </div>

            <div>
              <a href="" className="tooltip" data-tip="Terminal">
                <MdTerminal />
              </a>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Employee;
