const DashBoard = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-SECONDARY  ">
        Employee Management & Time Log
      </h1>
      <div className="grid grid-cols-3 gap-10 m-10">
        <div className="card card-compact  bg-base-100 shadow-xl mt-4">
          <div className="card-body text-SECONDARY ">
            <h2 className="card-title px-4">Admin</h2>
            <hr />
            <div className="flex font-medium px-4">
              <p className="text-left ">Total:</p>
              <p className="text-right  ">02</p>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl mt-4">
          <div className="card-body text-SECONDARY ">
            <h2 className="card-title px-4">Employee</h2>
            <hr />
            <div className="flex font-medium px-4">
              <p className="text-left ">Total:</p>
              <p className="text-right  ">10</p>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl mt-4">
          <div className="card-body text-SECONDARY ">
            <h2 className="card-title px-4">Sallary</h2>
            <hr />
            <div className="flex  font-medium px-4">
              <p className="text-left ">Total:</p>
              <p className="text-right">$ 199</p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto m-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin001@gamil.com</td>
              <td>
                <button className="bg-SECONDARY hover:bg-SECONDARY-dark font-medium text-WHITE  rounded-sm px-4 py-1 me-4">
                  Edit
                </button>
                <button className="bg-DANGER-light hover:bg-DANGER font-medium text-WHITE  rounded-sm px-4 py-1 ms-4">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>admin002@gamil.com</td>
              <td>
                <button className="bg-SECONDARY hover:bg-SECONDARY-dark font-medium text-WHITE  rounded-sm px-4 py-1 me-4">
                  Edit
                </button>
                <button className="bg-DANGER-light hover:bg-DANGER font-medium text-WHITE  rounded-sm px-4 py-1 ms-4">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
