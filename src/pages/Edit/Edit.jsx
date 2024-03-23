import { CiEdit } from "react-icons/ci";

const Edit = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="tooltip"
        data-tip="Edit"
        onClick={() => document.getElementById("edit_Modal").showModal()}
      >
        <CiEdit />
      </button>
      <dialog id="edit_Modal" className="modal">
        <div className="modal-box rounded">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="px-4 py-2 bg-SECONDARY-lightest hover:bg-SECONDARY-light  rounded font-medium">
                Edit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Edit;
