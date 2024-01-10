import { FaEdit, FaTrash } from "react-icons/fa";
import { useForm } from "../FormContext";
import EmptyForm from "./EmptyForm";

const DisplayUserForm = () => {
  const { state, dispatch } = useForm();
  return (
    <div
      className={`user-form ${
        state.userItems.length === 0 ? "justify-center" : "justify-between"
      }`}
    >
      {state.userItems.length === 0 ? (
        <EmptyForm />
      ) : (
        <div>
          {state.userItems.map((item) => (
            <div key={item.id} className="">
              {item.inputType === "description" ? (
                <div>
                  <h3 className="font-semibold">{item.label}</h3>
                  <hr />
                </div>
              ) : (
                <div className="flex justify-between items-center w-full gap-5">
                  <div>
                    <label htmlFor={item.inputType}>
                      {item.label}
                      {item.required ? (
                        <span className="text-xl text-red-600 font-bold">
                          *
                        </span>
                      ) : (
                        ""
                      )}
                    </label>
                    <input
                      type={item.inputType}
                      name={item.inputType}
                      placeholder={item.placeholder}
                      hidden={item.hidden}
                      required={item.required}
                      disabled={item.disabled}
                    />
                  </div>
                  <div>
                    <div>
                      <div
                        className="icon"
                        onClick={() => {
                          dispatch({ type: "editItem", payload: item.id });
                        }}
                      >
                        <FaEdit />
                      </div>
                      <div
                        className="icon"
                        onClick={() => {
                          dispatch({ type: "removeItem", payload: item.id });
                          console.log(item.id);
                        }}
                      >
                        <FaTrash />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayUserForm;
