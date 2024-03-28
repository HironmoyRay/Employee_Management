// window.onload = function () {
//   var now = new Date();
//   var year = now.getFullYear();
//   var month = (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1);
//   var day = (now.getDate() < 10 ? "0" : "") + now.getDate();

//   var currentDates = month + "-" + day + "-" + year;
//   console.log(currentDates);

//   document.getElementById("reduce-date").value = currentDates;
// };

// const ReduceLaunchHOur = () => {
//   return (
//     <div>
//       <button
//         className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1"
//         onClick={() => document.getElementById("reduce-lunch").showModal()}
//       >
//         Reduce Lunch Hour
//       </button>
//       <dialog id="reduce-lunch" className="modal">
//         <div className="modal-box rounded">
//           <form action="">
//             <div className="flex justify-between my-1">
//               <p className="w-40">Select Date</p>
//               <input
//                 type="date"
//                 name="select-date"
//                 id="reduce-date"
//                 className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
//               />
//             </div>
//           </form>
//           <div className="modal-action">
//             <form method="dialog" className="flex gap-4">
//               <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
//                 Reduce Lunch Hour
//               </button>
//               <button className="bg-SECONDARY  hover:bg-SECONDARY-dark text-WHITE text-sm rounded px-4 py-1">
//                 Close
//               </button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default ReduceLaunchHOur;

import { useEffect, useState } from "react";

const ReduceLaunchHour = () => {
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
        className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1"
        onClick={() => document.getElementById("reduce-lunch").showModal()}
      >
        Reduce Lunch Hour
      </button>
      <form>
        <dialog id="reduce-lunch" className="modal">
          <div className="modal-box rounded">
            <div action="">
              <div className="flex justify-between my-1">
                <p className="w-40">Select Date</p>
                <input
                  type="date"
                  name="select-date"
                  id="reduce-date"
                  value={currentDate} // Use state value here
                  onChange={(e) => setCurrentDate(e.target.value)} // Update state value here if needed
                  className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY"
                />
              </div>
            </div>
            <div className="modal-action">
              <div method="dialog" className="flex gap-4">
                <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
                  Reduce Lunch Hour
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

export default ReduceLaunchHour;
