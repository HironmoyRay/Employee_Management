import { useState } from "react";

const Create = ({ employees, setEmployees }) => {
  const [createData, setCreateData] = useState({
    EID: "",
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
    Join_Date: "",
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleCreateFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newValue = { ...createData };
    newValue[fieldName] = fieldValue;

    setCreateData(newValue);

    // Check if all required fields are filled
    const allFieldsFilled = Object.values(newValue).every(
      (value) => value !== ""
    );
    setIsFormFilled(allFieldsFilled);
  };

  const handleSubmitCreateData = (event) => {
    event.preventDefault();

    const newEmployee = {
      EID: createData.EID,
      First_Name: createData.First_Name,
      Last_Name: createData.Last_Name,
      Email: createData.Email,
      Join_Date: createData.Join_Date,
    };

    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);

    document.getElementById("create_Modal").close();
    // window.alert(`Submit ${newEmployee.First_Name} Successful!`);
  };

  return (
    <div>
      <button
        className="bg-PRIMARY hover:bg-PRIMARY-dark   text-WHITE text-sm rounded px-4 py-1"
        onClick={() => document.getElementById("create_Modal").showModal()}
      >
        Create
      </button>
      <dialog id="create_Modal" className="modal">
        <div className="modal-box rounded">
          <form action="">
            <div className="flex justify-between  my-1">
              <p className="w-40">EID</p>
              <input
                required
                type="text"
                name="EID"
                placeholder="EID"
                id="create-id"
                onChange={handleCreateFormChange}
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY"
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">First Name</p>
              <input
                required
                type="text"
                name="First_Name"
                placeholder="First Name"
                id="create-first-name"
                onChange={handleCreateFormChange}
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Last Name</p>
              <input
                required
                type="text"
                name="Last_Name"
                placeholder="Last Name"
                id="create-last-name"
                onChange={handleCreateFormChange}
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Email</p>
              <input
                required
                type="email"
                name="Email"
                placeholder="Email"
                id="email-create"
                onChange={handleCreateFormChange}
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Password</p>
              <input
                required
                type="password"
                name="Password"
                placeholder="Password"
                id="password-create"
                onChange={handleCreateFormChange}
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Confirm Password</p>
              <input
                required
                type="password"
                placeholder="Confirm Password"
                name="Confirm_Password"
                id="create-password"
                onChange={handleCreateFormChange}
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY"
              />
            </div>
            <div className="flex justify-between  my-1">
              <p className="w-40">Join Date</p>
              <input
                required
                type="date"
                name="Join_Date"
                id=""
                onChange={handleCreateFormChange}
                className="border border-SECONDARY-light rounded outline-none w-52 px-1 hover:border-SECONDARY focus:border-SECONDARY "
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog" className="flex gap-4">
              <button
                onClick={handleSubmitCreateData}
                className="bg-PRIMARY hover:bg-PRIMARY-dark text-WHITE text-sm rounded px-4 py-1"
                disabled={!isFormFilled}
                style={{
                  backgroundColor: isFormFilled ? "" : "#CCCCCC",
                  cursor: isFormFilled ? "pointer" : "not-allowed",
                }}
              >
                Submit
              </button>
              <button className="bg-SECONDARY  hover:bg-SECONDARY-dark text-WHITE text-sm rounded px-4 py-1">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Create;
