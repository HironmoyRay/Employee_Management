const SignInForm = () => {
  return (
    <div className="flex justify-center">
      {/* <div className=" flex justify-center">
        <div className="w-full max-w-sm bg-base-100 mt-10  mx-4 mb-4 border rounded-sm border-SECONDARY-light">
          <h3 className="text-lg p-1 font-medium">Signin</h3>
          <form className="card-body p-1">
            <div className="form-control">
              <label className="label p-1">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border border-SECONDARY-light hover:border-SECONDARY focus:border-SECONDARY outline-none p-1 rounded-sm "
                required
              />
            </div>
            <div className="form-control ">
              <label className="label p-1">
                <span className="label-text ">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border border-SECONDARY-light hover:border-SECONDARY focus:border-SECONDARY  outline-none p-1 rounded-sm "
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="flex justify-center  mb-2">
              <button className=" bg-PRIMARY hover:bg-PRIMARY-dark px-4  text-WHITE  rounded-sm p-1">
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div> */}
      <div className="my-20 border rounded border-SECONDARY-light p-2 ">
        <h1 className="text-lg font-semibold text-SECONDARY ">Signin</h1>
        <div className="w-96 my-2">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            id="signin-email"
            placeholder="Email Address"
            required
            className="border rounded-sm border-SECONDARY-light hover:border-SECONDARY outline-none focus:border-SECONDARY w-96 ps-1 "
          />
        </div>
        <div className="w-96 my-2">
          <p>Password</p>
          <input
            type="password"
            name="password"
            id="signin-password"
            placeholder="Password"
            required
            className="border rounded-sm border-SECONDARY-light hover:border-SECONDARY outline-none focus:border-SECONDARY w-96 ps-1"
          />
        </div>
        <small className="hover:underline">Forgot Password</small>
        <div className="my-2">
          <button
            type="submit"
            className="bg-PRIMARY hover:bg-PRIMARY-dark w-full  rounded-sm text-WHITE py-1"
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
