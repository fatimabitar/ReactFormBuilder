import { VscEmptyWindow } from "react-icons/vsc";

const EmptyForm = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center opacity-70">
      <VscEmptyWindow className="text-8xl mb-5" />
      <h2 className="capitalize text-lg font-semibold">
        Your Form is empty! <br />
        pleaser choose the items you want to add.
      </h2>
    </div>
  );
};

export default EmptyForm;
