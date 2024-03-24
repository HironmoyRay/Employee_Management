const ReduceLaunchHOur = () => {
  return (
    <div>
      <button
        className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1"
        onClick={() => document.getElementById("reduce-lunch").showModal()}
      >
        Reduce Lunch Hour
      </button>
      <dialog id="reduce-lunch" className="modal">
        <div className="modal-box rounded">
          <form action="">
            
            <div className="flex justify-between  my-1">
              <p className="w-40">Select Date</p>
              <input
                type="date"
                name="select-date"
                id="reduce-date"
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog" className="flex gap-4">
              <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
                Reduce Lunch Hour
              </button>
              <button className="bg-SECONDARY  hover:bg-SECONDARY-dark text-WHITE text-sm rounded px-4 py-1">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ReduceLaunchHOur;
