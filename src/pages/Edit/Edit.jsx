import { CiEdit } from "react-icons/ci";

const Edit = () => {
  return (
    <div>
      <button
        className="tooltip hover:bg-SECONDARY-light p-1 rounded-sm"
        data-tip="Edit"
        onClick={() => document.getElementById("edit_Modal").showModal()}
      >
        <CiEdit />
      </button>
      <dialog id="edit_Modal" className="modal">
        <div className="modal-box rounded">
          <form action="">
            <h3 className="font-bold text-lg text-SECONDARY ">
              Employee Information
            </h3>
            <div>
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
                <p className="w-40">Join Date</p>
                <input
                  type="date"
                  name="join-date"
                  id=""
                  className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
                />
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
                  Submit
                </button>
              </form>
            </div>

            <h3 className="font-bold text-lg text-SECONDARY ">
              Change Password
            </h3>
            <div className="border-t-2 border-t-SECONDARY-light pt-4 ">
              <div className="flex justify-between  my-1">
                <p className="w-40">New Password</p>
                <input
                  type="password"
                  name="new-password"
                  placeholder="New Password"
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
            </div>
            <div className="modal-action">
              <form method="dialog" className="flex gap-4">
                <button className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1">
                  Change
                </button>
                <button className="bg-SECONDARY  hover:bg-SECONDARY-dark text-WHITE text-sm rounded px-4 py-1">
                  Close
                </button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Edit;
