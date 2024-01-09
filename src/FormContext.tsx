import { createContext, useContext, useReducer } from "react";
import { userItems } from "./data";

export interface inputItem {
  inputType: string;
  label: string;
  placeholder: string;
  hidden: boolean;
  required: boolean;
  disabled: boolean;
}

interface FormContext {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
}

interface FormState {
  isStarted: boolean;
  userItems: inputItem[];
  isModalOpen: boolean;
  itemType: string | null;
}

type FormAction =
  | { type: "getStarted" }
  | { type: "openModal"; payload: string }
  | { type: "closeModal" };

const initialState: FormState = {
  isStarted: false,
  userItems: userItems,
  isModalOpen: false,
  itemType: null,
};
const FormContext = createContext<FormContext>({
  state: initialState,
  dispatch: () => null,
});

export const FormProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useForm = () => useContext(FormContext);

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "getStarted":
      return { ...state, isStarted: true };
    case "openModal":
      return { ...state, isModalOpen: true, itemType: action.payload };
    case "closeModal":
      return { ...state, isModalOpen: false };
    default:
      throw new Error("Unknown action");
  }
}
