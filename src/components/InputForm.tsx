import { useForm } from "../FormContext";
import { useGetValues } from "../utils/useGetValues";

const InputForm = () => {
  const { state, dispatch } = useForm();
  const {
    label,
    setLabel,
    placeholder,
    setPlaceholder,
    hidden,
    setHidden,
    required,
    setRequired,
    disabled,
    setDisabled,
    handleSaveValues,
  } = useGetValues();

  return (
    <div>
      <h2 className="text-xl capitalize mb-5">
        <span className="text-[#29A19C]">{state.itemType}</span> Component:
      </h2>

      <form className="form">
        <div className="form-group">
          <label htmlFor="text">
            Label: <span className="text-red-600 font-bold">*</span>
          </label>
          <input
            type="text"
            name="text"
            value={label}
            placeholder="Enter Your Label"
            onChange={(e) => {
              setLabel(e.target.value);
            }}
            required
          />

          <label htmlFor="placeholder">placeholder:</label>
          <input
            type="text"
            name="text"
            value={placeholder}
            onChange={(e) => {
              setPlaceholder(e.target.value);
            }}
            placeholder="Enter Your Placeholder"
          />
        </div>

        <div className="form-group">
          <div className="check-group">
            <input
              type="checkbox"
              name="hidden"
              id="hidden"
              checked={hidden}
              onChange={(e) => {
                setHidden(e.target.checked);
              }}
            />
            <label htmlFor="hidden">Hidden</label>
          </div>

          <div className="check-group">
            <input
              type="checkbox"
              name="required"
              id="required"
              checked={required}
              onChange={(e) => {
                setRequired(e.target.checked);
              }}
            />
            <label htmlFor="required">required</label>
          </div>

          <div className="check-group">
            <input
              type="checkbox"
              name="disabled"
              id="disabled"
              checked={disabled}
              onChange={(e) => {
                setDisabled(e.target.checked);
              }}
            />
            <label htmlFor="disabled">disabled</label>
          </div>
        </div>

        <input
          type="button"
          value="save"
          className="btn btn-full"
          onClick={() => {
            handleSaveValues();
            dispatch({ type: "closeModal" });
          }}
        />
      </form>
    </div>
  );
};

export default InputForm;
