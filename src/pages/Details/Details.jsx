import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Details = () => {
  const details = useLoaderData();
  const {
    id,
    name,
    img,
    work_site: site,
    entry_time: entry,
    exit_time: exit,
    work_hour: work,
    weekly_total_hour: weekly,
    monthly_total_hour: monthly,
    yearly_total_hour: yearly,
    post,
  } = details;

  const [current, setCurrent] = useState(new Date());
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setCurrent(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  },[])

  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <div className="hero-content">
            <img src={img} className="w-60 h-60 rounded-full shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-2">{post}</p>
              <p className="">{site}</p>
              <p className="">ID: {id}</p>
              <button className="bg-PRIMARY-light hover:bg-PRIMARY   text-WHITE  rounded-md px-4 py-2 my-4">
                Update
              </button>
            </div>
          </div>
        </div>
        <div>
          <table className="table table-sm ">
            <thead>
              <tr>
                <th>
                  <span>{current.toLocaleString()}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Entry Time:</th>
                <td>{entry}</td>
              </tr>
              <tr>
                <th>Exit Time:</th>
                <td>{exit}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table className="table table-sm">
            
            <tbody>
              <tr>
                <th>Last Day</th>
                <td>
                  {work} <sub>hours</sub>
                </td>
              </tr>
              <tr>
                <th>Last Week</th>
                <td>
                  {weekly} <sub>hours</sub>
                </td>
              </tr>
              <tr>
                <th>Last Month</th>
                <td>
                  {monthly} <sub>hours</sub>
                </td>
              </tr>
              <tr>
                <th>Last Year</th>
                <td>
                  {yearly} <sub>hours</sub>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;
