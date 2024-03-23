import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
const Pagination = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="join rounded">
        <button className="join-item btn mx-1 ">
          <FaLessThan />
        </button>
        <button className="join-item btn ">1</button>
        <button className="join-item btn ">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
        <button className="join-item btn btn-active">5</button>
        <button className="join-item btn">6</button>
        <button className="join-item btn">7</button>
        <button className="join-item btn">8</button>
        <button className="join-item btn">9</button>
        <button className="join-item btn">10</button>
        <button className="join-item btn mx-1 ">
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
