import { useForm } from "../FormContext";
import EmptyForm from "./EmptyForm";

const DisplayUserForm = () => {
  const { state } = useForm();
  return (
    <div
      className={`flex flex-col items-center p-5 h-[80vh] ${
        state.userItems.length === 0 ? "justify-center" : "justify-between"
      }`}
    >
      {state.userItems.length === 0 ? (
        <EmptyForm />
      ) : (
        <div>
          {state.userItems.map((item) => (
            <div key={item.label} className="bg-slate-500">
              <label htmlFor={item.inputType}>
                {item.label}
                {item.required ? (
                  <span className="text-xl text-red-600 font-bold">*</span>
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
                // value={item.inputType === "button" ? item.label : ""}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayUserForm;
