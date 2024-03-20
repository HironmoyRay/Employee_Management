import { Link, useLoaderData } from "react-router-dom";
// const details = useLoaderData();

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
        <td>
          <Link to={`/details/${id}`}><button className="bg-PRIMARY-light hover:bg-PRIMARY   text-WHITE  rounded-md px-2">
            Details
          </button></Link>
          
        </td>
      </tr>
    </tbody>
  );
};

export default Employee;
