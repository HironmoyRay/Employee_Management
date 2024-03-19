import { useLoaderData } from "react-router-dom";
import Employee from "../Employee/Employee";

const Employees = () => {
  const employees = useLoaderData();
    // console.log(employees.daily_reports);

  return (


    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            {/* <th>Post</th> */}
            <th>Site</th>
            <th>Entry</th>
            <th>Exit</th>
            <th>Today</th>
            <th>Monthly</th>
            <th>Yearly</th>
          </tr>
        </thead>
           {employees.map((employee) => (
       <Employee key={employee.id} employee={employee}></Employee>
       ))}
      </table>
    </div>
  );
};

export default Employees;
