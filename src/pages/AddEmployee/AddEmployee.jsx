const AddEmployee = () => {
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Id</span>
              </label>
              <input
                type="text"
                placeholder="User Id"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Site Name</span>
              </label>
              <input
                type="text"
                placeholder="Site Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Employee Id</span>
              </label>
              <input
                type="text"
                placeholder="Employee Id"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="bg-PRIMARY-light hover:bg-PRIMARY   text-WHITE  rounded-sm p-3">
                Create
              </button>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
