import Details from "../Details/Details";

const Employee = ({ employee }) => {
  const { id, name, img, work_site, work_hour,entry_time, exit_time, post, monthly_total_hour, yearly_total_hour} = employee;

  return (
    <div>
        
      <div className="grid  grid-cols-5 md:grid-cols-9 items-center p-4 border-b-2">
        <div className="md:flex  md:items-center hidden"><img className="rounded-full w-20 h-16 " src={img} alt="" /></div>
        <h1 className="font-semibold hidden md:block">{name}</h1>
        <p className="font-semibold">{id}</p>
        <p>{work_site}</p>
        <p>{entry_time}</p>
        <p>{exit_time}</p>
        <p className="hidden md:block">{work_hour} <sub>Hours</sub></p>
        <p className="hidden md:block">{monthly_total_hour} <sub>Hours</sub> </p>
        <button className="bg-violet-500 hover:bg-violet-700 text-white rounded-xl px-2 py-1 md:p-2"
        >Details
        </button>
      </div>

    </div>
  );
};

export default Employee;
