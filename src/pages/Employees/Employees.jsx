import { useLoaderData } from "react-router-dom";
import Employee from "../Employee/Employee";

const Employees = () => {
  const employees = useLoaderData();

  return (
    <div className=" max-w-screen-xl mx-auto ">
      <div className="overflow-x-auto px-4">
        <div className="flex justify-between my-4 ">
          <h1 className="text-SECONDARY font-bold ">Employee</h1>
          <button className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1">
            Create
          </button>
        </div>
        <table className="table table-sm  border-x border-SECONDARY-lightest    ">
          <thead className="">
            <tr className=" bg-PRIMARY-dark  text-WHITE  ">
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
            <Employee key={employee.EID} employee={employee}></Employee>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Employees;
