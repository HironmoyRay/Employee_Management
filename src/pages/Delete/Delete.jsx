// import { MdDelete } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Delete = ({Name}) => {
  
  return (
    <div>
      <button
        className="tooltip hover:bg-SECONDARY-light p-1 rounded-sm"
        data-tip="Delete"
        onClick={() => document.getElementById("delete_Modal").showModal()}
      >
        <AiOutlineDelete />
      </button>
      <dialog id="delete_Modal" className="modal">
        <div className="modal-box rounded">
          <h3 className="font-bold text-lg">Delete {Name}</h3>
          <p className="py-4">
            Are you sure you would like to delete this employee from database?
            This action can not be undone.
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-4">
              <button className="bg-DANGER   hover:bg-DANGER-dark text-WHITE text-sm rounded px-4 py-1">
                Delete
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

export default Delete;
