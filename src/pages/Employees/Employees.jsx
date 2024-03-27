import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddLunchHour from "../../component/AddLunchHour/AddLunchHour";
import ReduceLaunchHOur from "../../component/ReduceLunchHour/ReduceLunchHour";
import Create from "../Create/Create";
import Employee from "../Employee/Employee";
import Pagination from "../Pagination/Pagination";
import data from "./main2.json";

const Employees = () => {
  // const employees = useLoaderData();
// fetch("../public/daily_reports/..JSON").then (res => res.json()).then (data => setEmployees(data));

const [employees,setEmployees]=useState(data);
console.log(employees);

  const [isAllSelected, setAllSelected] = useState(false);

  const handleAllCheckboxClick = () => {
    setAllSelected(!isAllSelected);
  };
  // console.log(isAllSelected);
  return (
    <div className=" max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between my-4">
        <h1 className="text-SECONDARY font-bold ">Employee</h1>
        <div className="flex gap-4">
          <AddLunchHour></AddLunchHour>
          <ReduceLaunchHOur></ReduceLaunchHOur>
          <Create employees={employees} setEmployees={setEmployees}></Create>
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          className="border w-full my-2 rounded border-SECONDARY-light hover:border-SECONDARY focus:border-SECONDARY   px-4 py-1 outline-none"
          placeholder="Search..."
          id=""
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-sm  border-x border-SECONDARY-lightest">
          <thead className="">
            <tr className=" bg-PRIMARY-dark  text-WHITE  ">
              <td>
                <input
                  type="checkbox"
                  onChange={handleAllCheckboxClick}
                  checked={isAllSelected}
                  name=""
                  id=""
                />
              </td>
              <th>GUID</th>
              <th>EID</th>
              <th>Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Terminal</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          {employees.map((employee) => (
            <Employee
              key={employee.EID}
              employee={employee}
              isAllSelected={isAllSelected}
            ></Employee>
          ))}
        </table>
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Employees;
