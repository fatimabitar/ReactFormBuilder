import FormElementsOptions from "../components/FormElementsOptions";
import ItemModal from "../components/ItemModal";
import PreviewContainer from "../components/PerviewContainer";

const FormPage = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <FormElementsOptions />
      <PreviewContainer />
      <ItemModal />
    </div>
  );
};

export default FormPage;
