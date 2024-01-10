import { useForm } from "../FormContext";
import InputForm from "./InputForm";
import EditForm from "./editForm";

const ItemModal = () => {
  const { state } = useForm();
  if (state.isModalOpen)
    return (
      <div className="modal">
        <div className="modal_overlay"></div>
        <div className="modal-box">
          <div>{state.isEdit ? <EditForm /> : <InputForm />}</div>
        </div>
      </div>
    );
  else {
    return null;
  }
};

export default ItemModal;
