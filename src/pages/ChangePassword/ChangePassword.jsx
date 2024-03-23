const ChangePassword = () => {
  return (
    <div>
      <h3 className="font-bold text-lg text-SECONDARY ">Change Password</h3>
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
    </div>
  );
};

export default ChangePassword;
