import { useForm } from "../FormContext";
import InputForm from "./InputForm";

const ItemModal = () => {
  const { state } = useForm();
  if (state.isModalOpen)
    return (
      <div className="modal">
        <div className="modal_overlay"></div>
        <div className="modal-box">
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
