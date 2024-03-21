import { useLoaderData } from "react-router-dom";
import Employee from "../Employee/Employee";

const Employees = () => {
  const employees = useLoaderData();
  // console.log(employees.daily_reports);

  return (
    <div className=" ">
      <div className="overflow-x-auto">
        <div className="flex justify-between my-4  ">
          <h1 className="text-SECONDARY font-bold ">Employee</h1>
          <button className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1">
            Create
          </button>
        </div>
        <table className="table table-xl">
          <thead>
            <tr>
              <th>GUID</th>
              <th>EID</th>
              <th>Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Terminal</th>
              <th>Created</th>
              <th>
                <div className="flex items-center">
                  <p>A</p>
                  <p>A</p>
                  <p>A</p>
                </div>
              </th>
            </tr>
          </thead>
          {employees.map((employee) => (
            <Employee key={employee.id} employee={employee}></Employee>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Employees;
