import { useCallback, useEffect } from "react";
import { useForm } from "../FormContext";
import { useGetValues } from "../utils/useGetValues";

const EditForm = () => {
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
    handleUpdate,
  } = useGetValues();

  const index = state.editedItemIndex;

  const init = useCallback(() => {
    setLabel(state.userItems[index].label);
    setPlaceholder(state.userItems[index].placeholder);
    setRequired(state.userItems[index].required);
    setHidden(state.userItems[index].hidden);
    setDisabled(state.userItems[index].disabled);
  }, [
    index,
    setDisabled,
    setHidden,
    setLabel,
    setPlaceholder,
    setRequired,
    state,
  ]);
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div>
      <h2 className="text-xl capitalize mb-5">
        <span className="text-[#29A19C]">
          {state.userItems[index].inputType}
        </span>{" "}
        Component:
      </h2>

      <form className="form">
        <h2 className="items-start">Please choose your custum settings:</h2>
        {state.itemType === "description" ? (
          <div className="flexCol w-full">
            <label htmlFor="text">Description</label>
            <textarea
              name="text"
              value={state.userItems[index].label}
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
            value="Update"
            className="btn btn-full mr-4"
            onClick={() => {
              handleUpdate();
              dispatch({ type: "closeModal" });
              dispatch({ type: "restEditItem" });
              console.log(state.isEdit);
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

export default EditForm;
