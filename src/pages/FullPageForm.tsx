import { useForm } from "../FormContext";

const FullPageForm = () => {
  const { state, dispatch } = useForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted Successfully!")
  };

  return (
    <section className="container min-h-screen flexCol my-3">
      <form
        className="flexCol columns-4 gap-8 bg-bgSecondary p-20 rounded-lg"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {state.userItems.map((item) => (
          <div key={item.id} className="">
            {item.inputType === "description" ? (
              <div>
                <h3 className="font-semibold">{item.label}</h3>
                <hr />
              </div>
            ) : (
              <div className="flex justify-between items-center w-full gap-5">
                <div
                  className={` flexBetween ${
                    item.inputType === "checkbox" || item.inputType === "radio"
                      ? " checkbox"
                      : "input"
                  }`}
                >
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
                    
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="flexBetween w-9/12 my-5">
          <button type="submit" className="btn btn-full mx-auto">
            Submit
          </button>
          <input
            type="button"
            value="Back"
            className="btn btn-outline mx-auto"
            onClick={() => {
              dispatch({ type: "createForm" });
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default FullPageForm;
