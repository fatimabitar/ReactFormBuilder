import { useId, useState } from "react";
import { userItems } from "../data";
import { useForm } from "../FormContext";

export const useGetValues = () => {
  const { state } = useForm();
  const [label, setLabel] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(false);
  const [required, setRequired] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const inputType = state.itemType;
  const id = useId();

  // const validateErrors = {};

  const handleSaveValues = () => {
    if (
      !label.trim() &&
      !placeholder.trim() &&
      !hidden &&
      !required &&
      !disabled
    ) {
      alert("your item is empty! please choose some settings.");
    } else {
      state.userItems.push({
        id: id,
        inputType: inputType,
        label: label,
        placeholder: placeholder,
        hidden: hidden,
        required: required,
        disabled: disabled,
      });
      console.log(userItems);
    }
  };
  const handleUpdate = () => {
    const index = state.editedItemIndex;
    const newArray = (state.userItems[index] = {
      id: id,
      inputType: inputType,
      label: label,
      placeholder: placeholder,
      hidden: hidden,
      required: required,
      disabled: disabled,
    });
    console.log(newArray);
  };

  /* Validate */

  return {
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
    handleUpdate,
  };
};
