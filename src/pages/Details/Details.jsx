import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData()
  return (
    <div>
      <h1>Details: {details.id}</h1>
    </div>
  );
};

export default Details;
