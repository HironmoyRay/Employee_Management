const Employee = ({ employee }) => {
  const {
    id,
    name,
    img,
    work_site,
    work_hour,
    entry_time,
    exit_time,
    post,
    monthly_total_hour,
    yearly_total_hour,
  } = employee;

  return (
    // // <div>

    //   {/* <div className="grid  grid-cols-5 md:grid-cols-9 items-center px-4 mx-4 border-b-2 border-b-SECONDARY   text-sm">
    //     <p className="font-medium ">{id}</p>
    //     <h1 className="font-semibold hidden md:block col-span-2 ">{name}</h1>
    //     <p>{work_site}</p>
    //     <p>{entry_time}</p>
    //     <p>{exit_time}</p>
    //     <p className="hidden md:block">
    //       {work_hour} <sub>Hours</sub>
    //     </p>
    //     <p className="hidden md:block">
    //       {monthly_total_hour} <sub>Hours</sub>{" "}
    //     </p>
    //     <button className="bg-PRIMARY-light hover:bg-PRIMARY   text-WHITE  rounded-xl px-2 my-1 py-1">
    //      <Link> Details</Link>
    //     </button>
    //   </div> */}
    // {/* </div> */}
    <tbody>
      <tr>
        <th>{id}</th>
        <td>{name}</td>
        {/* <td>{post}</td> */}
        <td>{work_site}</td>
        <td>{entry_time}</td>
        <td>{exit_time}</td>
        <td>
          {work_hour}
          <sub> hours</sub>
        </td>
        <td>
          {monthly_total_hour}
          <sub> hours</sub>
        </td>
        <td>
          {yearly_total_hour}
          <sub> hours</sub>
        </td>
      </tr>
    </tbody>
  );
};

export default Employee;
