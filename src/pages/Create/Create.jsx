const Create = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1"
        onClick={() => document.getElementById("create_Modal").showModal()}
      >
        Create
      </button>
      <dialog id="create_Modal" className="modal">
        <div className="modal-box rounded">
          <form action="">
            <div className="flex justify-between  my-1">
              <p className="w-40">EID</p>
              <input
                type="text"
                name="eid"
                placeholder="EID"
                id=""
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY"
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">First Name</p>
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                id=""
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Last Name</p>
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                id=""
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Email</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id=""
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id=""
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Confirm Password</p>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirm-password"
                id=""
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY"
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Join Date</p>
              <input
                type="date"
                name="join-date"
                id=""
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog" className="flex gap-4">
              <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
                Submit
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

export default Create;
