import { useForm } from "../FormContext";

const DisplayUserForm = () => {
  const { state } = useForm();
  return (
    <div>
      {state.userItems?.map((item) => (
        <div key={item.label}>
          <label htmlFor={item.inputType}>{item.label}</label>
          <input
            type={item.inputType}
            name={item.inputType}
            placeholder={item.placeholder}
            hidden={item.hidden}
            required={item.required}
            disabled={item.disabled}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayUserForm;
