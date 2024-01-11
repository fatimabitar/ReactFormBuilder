import { useForm } from "../FormContext";
import { mainFormItems } from "../data";

const FormElementsOptions = () => {
  const { dispatch } = useForm();
  return (
    <div className="w-full lg:w-2/12 bg-bgSecondary shadow h-auto lg:h-screen lg:overflow-y-scroll">
      <div className="w-11/12 mx-auto flex flex-col justify-between py-5">
        <div>
          <h2 className="font-semibold text-[16px]">
            Choose Your Form Elements:
          </h2>
          <hr className="w-full my-3 opacity-60" />
        </div>

        <div className="flex flex-row flex-wrap gap-3 lg:gap-0 lg:flex-col">
          {mainFormItems.map((item) => (
            <div
              key={item.id}
              className="element-type"
              onClick={() => {
                dispatch({ type: "openModal", payload: `${item.type}` });
              }}
            >
              <h3 className="font-semibold capitalize text-center border-b border-b-[#555] pb-2">
                {item.type}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormElementsOptions;
