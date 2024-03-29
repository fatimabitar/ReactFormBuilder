import { useForm } from "../FormContext";
import DisplayUserForm from "./DisplayUserForm";

const PreviewContainer = () => {
  const { dispatch } = useForm();
  return (
    <section className="preview-container">
      <div className="w-full">
        <h2 className="text-center my-3 text-xl">Preview Form Changes:</h2>
        <div className="displayForm">
          <DisplayUserForm />
        </div>
      </div>
      <div className="btns flex gap-5 mb-3">
        <button
          className="btn btn-full"
          onClick={() => {
            dispatch({ type: "createForm" });
          }}
        >
          create
        </button>
        <button
          className="btn btn-outline"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          reset
        </button>
      </div>
    </section>
  );
};

export default PreviewContainer;
