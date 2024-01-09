import { useState } from "react";
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

  const handleSaveValues = () => {
    userItems.push({
      inputType: inputType,
      label: label,
      placeholder: placeholder,
      hidden: hidden,
      required: required,
      disabled: disabled,
    });
    console.log(userItems);
  };

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
  };
};
