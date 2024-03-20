import { useLoaderData } from "react-router-dom";
import Site from "../Site/Site";

const AllSites = () => {
  const allSites = useLoaderData();
  return (
    <div className="flex justify-center m-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allSites.map((site, indx) => (
          <Site key={indx} site={site}></Site>
        ))}
      </div>
    </div>
  );
};

export default AllSites;
