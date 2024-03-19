const Profile = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
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
              <h2 className="text-xl py-6 font-medium">Work Experience: 3 Years</h2>
            </div>
            <button className="bg-PRIMARY-light hover:bg-PRIMARY   text-WHITE  rounded-xl px-4 py-2">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
