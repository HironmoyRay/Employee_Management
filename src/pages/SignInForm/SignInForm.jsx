import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div>
      <form className="my-10">
        <div className="hero">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
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
                <Link className="btn  bg-violet-500 text-white ">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
