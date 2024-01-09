import { useForm } from "../FormContext";
import { FaTimes } from "react-icons/fa";
import InputForm from "./InputForm";

const ItemModal = () => {
  const { state, dispatch } = useForm();
  if (state.isModalOpen)
    return (
      <div className="modal">
        <div className="modal_overlay"></div>
        <div className="modal-box">
          <button
            className="text-red-600 text-3xl absolute right-3 top-3 z-50"
            onClick={() => {
              dispatch({ type: "closeModal" });
            }}
          >
            <FaTimes />
          </button>

          <div>
            <InputForm />
          </div>
        </div>
      </div>
    );
  else {
    return null;
  }
};

export default ItemModal;
