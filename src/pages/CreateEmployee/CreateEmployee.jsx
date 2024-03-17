const CreateEmployee = () => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <input type="text" name="firstName" id="" />
              <input type="text" name="firstName" id="" />
              <button className="btn bg-violet-500 text-white">Create</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateEmployee;
