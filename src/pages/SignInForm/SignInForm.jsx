const SignInForm = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100 mt-10  mx-4 mb-20">
          <form className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-PRIMARY-light text-WHITE  ">
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
