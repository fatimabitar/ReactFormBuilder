import { useForm } from "./FormContext";
import FormPage from "./pages/FormPage";
import FullPageForm from "./pages/FullPageForm";
import StatrerPage from "./pages/StatrerPage";

const App = () => {
  const { state } = useForm();
  return (
    <main>
      {state.isStarted ? (
        state.isPreview ? (
          <FullPageForm />
        ) : (
          <FormPage />
        )
      ) : (
        <StatrerPage />
      )}
    </main>
  );
};

export default App;
