import { useForm } from "../FormContext";

const StatrerPage = () => {
  const { dispatch } = useForm();
  return (
    <section className="main">
      <h1 className="md:text-5xl text-3xl text-center sm:px-3 capitalize">
        Welocem to Dynamic forms builder.
      </h1>
      <button
        className="btn btn-full"
        onClick={() => {
          dispatch({ type: "getStarted" });
        }}
      >
        Get Started
      </button>
    </section>
  );
};

export default StatrerPage;
