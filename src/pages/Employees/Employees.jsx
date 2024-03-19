import { useLoaderData } from "react-router-dom";
import Employee from "../Employee/Employee";

const Employees = () => {
  const employees = useLoaderData();
  //   console.log(employees.daily_reports);

  return (
    // <div className=" mt-2 md:mt-6 mb-16">
    //   <div className="grid  grid-cols-5 md:grid-cols-9 items-center px-4 mx-4 ">
    //     <p className=" underline font-bold ">ID</p>
    //     <p className=" underline font-bold hidden md:block col-span-2">Name</p>
    //     <p className=" underline font-bold">Site</p>
    //     <p className=" underline font-bold">Entry</p>
    //     <p className=" underline font-bold">Exit</p>
    //     <p className=" underline font-bold hidden md:block">Today</p>
    //     <p className=" underline font-bold hidden md:block">This Month</p>
    //   </div>
    //   {employees.daily_reports.map((employee) => (
    //     <Employee key={employee.id} employee={employee}></Employee>
    //   ))}
    // </div>

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
           {employees.daily_reports.map((employee) => (
       <Employee key={employee.id} employee={employee}></Employee>
       ))}
      </table>
    </div>
  );
};

export default Employees;
