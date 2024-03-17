import { useLoaderData } from "react-router-dom";
import Employee from "../Employee/Employee";

const Employees = () => {
  const employees = useLoaderData();
  //   console.log(employees.daily_reports);

  return (
    <div className=" mt-2 md:mt-6 mb-16">
      <div className="grid  grid-cols-5 md:grid-cols-9 items-center px-4 ">
        <p className=" underline font-bold hidden md:block "></p>
        <p className=" underline font-bold hidden md:block">Name</p>
        <p className=" underline font-bold ">ID</p>
        <p className=" underline font-bold">Site</p>
        <p className=" underline font-bold">Entry</p>
        <p className=" underline font-bold">Exit</p>
        <p className=" underline font-bold hidden md:block">Today</p>
        <p className=" underline font-bold hidden md:block">This Month</p>
        

      </div>
      {employees.daily_reports.map((employee) => (
        <Employee key={employee.id} employee={employee}></Employee>
      ))}
    </div>
  );
};

export default Employees;
