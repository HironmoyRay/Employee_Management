
import { useLoaderData } from "react-router-dom";
import Site from "../Site/Site";

const Terminal = () => {
  const terminals = useLoaderData();
  return (
    <div className=" container mx-auto">
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {terminals.map((site, indx) => (
            <Site key={indx} site={site}></Site>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
