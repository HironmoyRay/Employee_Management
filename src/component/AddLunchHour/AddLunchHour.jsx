import { useEffect, useState } from "react";

const AddLunchHour = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1);
    const day = (now.getDate() < 10 ? "0" : "") + now.getDate();
    const currentDates = `${year}-${month}-${day}`;
    setCurrentDate(currentDates);
  }, []);
  return (
    <div>
      <button
        className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1"
        onClick={() => document.getElementById("add-lunch").showModal()}
      >
        Add Lunch Hour
      </button>
      <form>
        <dialog id="add-lunch" className="modal">
          <div className="modal-box rounded">
            <div>
              <div className="flex justify-between  my-1">
                <p className="w-40">Select Date</p>
                <input
                  type="date"
                  name="select-date"
                  id="add-date"
                  value={currentDate} // Use state value here
                  onChange={(e) => setCurrentDate(e.target.value)} // Update state value here if needed
                  className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
                />
              </div>
            </div>
            <div className="modal-action">
              <div method="dialog" className="flex gap-4">
                <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
                  Add Lunch Hour
                </button>
                <button className="bg-SECONDARY  hover:bg-SECONDARY-dark text-WHITE text-sm rounded px-4 py-1">
                  Close
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </form>
    </div>
  );
};

export default AddLunchHour;
