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
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* <div className="flex flex-col lg:flex-row justify-around items-center mb-20"> */}
      <div className=" mb-20">
        <div className="hero-content flex-col md:flex-row gap-10">
          <img
            src={img}
            className="w-40 md:w-60 h-40 md:h-60 rounded-full shadow-2xl"
          />
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              {name}
            </h1>
            <p className="py-2">{post}</p>
            <p className="">{site}</p>
            <p className="">ID: {id}</p>
            <div className="flex justify-center  md:justify-start ">
              <button className="bg-PRIMARY-light hover:bg-PRIMARY   text-WHITE  rounded-md px-4 py-2 my-4">
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around text-center">
          <div className="mt-10 w-80  ">
            <span className="text-xl font-medium text-SECONDARY border-b-2">
              {current.toLocaleString()}
            </span>

            <table className="table table-sm ">
              <tbody>
                <tr>
                  <th>Entry Time:</th>
                  <td className="text-end ">{entry}</td>
                </tr>
                <tr>
                  <th>Exit Time:</th>
                  <td className="text-end ">{exit}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-10 w-80">
            <p className="text-center text-xl font-medium text-SECONDARY border-b-2">
              Summary
            </p>
            <table className="table table-sm">
              <tbody>
                <tr>
                  <th>Last Day</th>
                  <td className="text-end ">
                    {work} <sub>hours</sub>
                  </td>
                </tr>
                <tr>
                  <th>Last Week</th>
                  <td className="text-end ">
                    {weekly} <sub>hours</sub>
                  </td>
                </tr>
                <tr>
                  <th>Last Month</th>
                  <td className="text-end ">
                    {monthly} <sub>hours</sub>
                  </td>
                </tr>
                <tr>
                  <th>Last Year</th>
                  <td className="text-end ">
                    {yearly} <sub>hours</sub>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
