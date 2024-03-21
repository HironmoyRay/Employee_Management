const User = () => {
  return (
    <div>
      <div className="flex justify-center mt-10 mb-20 mx-10">
        <div className="card  w-full max-w-xl shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Second Name</span>
              </label>
              <input
                type="text"
                placeholder="Second Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="bg-PRIMARY-light hover:bg-PRIMARY   text-WHITE  rounded-md p-3">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
