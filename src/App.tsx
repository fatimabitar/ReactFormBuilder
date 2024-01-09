import { useForm } from "./FormContext";
import FormPage from "./pages/FormPage";
import StatrerPage from "./pages/StatrerPage";

const App = () => {
  const { state } = useForm();
  return <main>{state.isStarted ? <FormPage /> : <StatrerPage />}</main>;
};

export default App;
