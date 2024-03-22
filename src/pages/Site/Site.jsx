const Site = ({ site }) => {
  const { name, img, manager, location, status, total_employee, starts, ends } =
    site;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-60 h-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title "> {name}</h2>
          <p className="font-medium text-xl">Manager: {manager}</p>
          <p className="font-medium">Total Employee: {total_employee}</p>
          <p className="font-medium">Location: {location}</p>
          <p className="font-medium bg-PRIMARY-dark  px-4 py-1 rounded text-WHITE "> {status}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Site;
