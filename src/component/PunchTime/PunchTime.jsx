// window.onload = function () {
//   // Get current time
//   var now = new Date();
//   var hours = now.getHours();
//   var minutes = now.getMinutes();

//   // Format date as YYYY-MM-DD
//   var year = now.getFullYear();
//   var month = (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1);
// //   console.log(now.getMonth());

//   var day = (now.getDate() < 10 ? "0" : "") + now.getDate();

//   // Format time as HH:MM
//   var currentTime =
//     (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;
//   // Current Date
//   var currentDate = year + "-" + month + "-" + day;

//   // Set default value to the input field
//   document.getElementById("punch-time").value = currentTime;
//   document.getElementById("punch-date").value = currentDate;
// };

// const Punchin = () => {
//   return (
//     <div>
//       <button
//         className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1"
//         onClick={() => document.getElementById("punch-in").showModal()}
//       >
//         Punch in
//       </button>
//       <dialog id="punch-in" className="modal">
//         <div className="modal-box rounded">
//           <form action="">
//             <div className="flex justify-between  my-1">
//               <p className="w-40">Select Time</p>

//               <input
//                 type="time"
//                 name="select-time"
//                 id="punch-time"
//                 className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
//               />
//             </div>
//             <div className="flex justify-between  my-1">
//               <p className="w-40">Select Date</p>
//               <input
//                 type="date"
//                 name="select-date"
//                 id="punch-date"
//                 className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
//               />
//             </div>
//           </form>
//           <div className="modal-action">
//             <form method="dialog" className="flex gap-4">
//               <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
//                 Punch in
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

// export default Punchin;

import { useEffect, useState } from "react";

const PunchTime = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1);
    const day = (now.getDate() < 10 ? "0" : "") + now.getDate();

    const formattedTime = `${(hours < 10 ? "0" : "") + hours}:${
      (minutes < 10 ? "0" : "") + minutes
    }`;
    const formattedDate = `${year}-${month}-${day}`;

    setCurrentTime(formattedTime);
    setCurrentDate(formattedDate);
  }, []);

  const handleCloseModal = () => {
    document.getElementById("punch-in").close();
  };

  return (
    <div>
      <button
        className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1"
        onClick={() => document.getElementById("punch-in").showModal()}
      >
        Punch Time
      </button>
      <form>
        <dialog id="punch-in" className="modal">
          <div className="modal-box rounded">
            <div action="">
              <div className="flex justify-between my-1">
                <p className="w-40">Select Time</p>
                <input
                  type="time"
                  name="select-time"
                  value={currentTime}
                  className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY"
                  onChange={(e) => setCurrentTime(e.target.value)}
                />
              </div>
              <div className="flex justify-between my-1">
                <p className="w-40">Select Date</p>
                <input
                  type="date"
                  name="select-date"
                  value={currentDate}
                  className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY"
                  onChange={(e) => setCurrentDate(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-action">
              <div className="flex gap-4">
                <button
                  className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1"
                  onClick={handleCloseModal}
                >
                  Punch in
                </button>
                <button
                  className="bg-SECONDARY hover:bg-SECONDARY-dark text-WHITE text-sm rounded px-4 py-1"
                  onClick={handleCloseModal}
                >
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

export default PunchTime;
