const Profile = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="hero-content flex-col md:flex-row-reverse gap-10">
          <img
            src="/src/assets/images/p5.jpeg"
            className="max-w-md rounded-sm"
          />
          <div className="">
            <h1 className="text-5xl font-bold">JHON DOE</h1>
            <h1 className="text-3xl font-bold pt-4">Site Manager</h1>
            <div className="py-6">
              <p className="text-xl font-bold py-4">My Projects:</p>
              <ol>
                <li>Excavated area for underground utilities installation.</li>
                <li>Surveyed land for future expansion project.</li>
                <li>Assembled and installed new furniture in meeting rooms.</li>
                <li>Installed new HVAC system in main building.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl py-6 font-medium">
                Work Experience: 3 Years
              </h2>
            </div>
            <button className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE px-4 py-1 rounded-sm">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
