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
    <div className="w-full">
      <h2 className="text-xl capitalize mb-5">
        <span className="text-[#29A19C]">{state.itemType}</span> Component:
      </h2>

      <form className="form">
        <h2 className="items-start">Please choose your custum settings:</h2>
        {state.itemType === "description" ? (
          <div className="flexCol w-full">
            <label htmlFor="text">Description</label>
            <textarea
              name="text"
              value={label}
              placeholder="Enter Your Description"
              onChange={(e) => {
                setLabel(e.target.value);
              }}
              className="w-full h-40"
              required
            />
          </div>
        ) : (
          <div className="flexCol gap-10">
            <div className="form-group">
              <label htmlFor="text">Label:</label>
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
            </div>
            <div className="form-group">
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
          </div>
        )}
        <div>
          <input
            type="button"
            value="save"
            className="btn btn-full mr-4"
            onClick={() => {
              handleSaveValues();
              dispatch({ type: "closeModal" });
            }}
          />
          <input
            type="button"
            value="cancel"
            className="btn btn-outline"
            onClick={() => {
              dispatch({ type: "closeModal" });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
