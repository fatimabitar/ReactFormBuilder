import { createContext, useContext, useReducer } from "react";
import { userItems } from "./data";

export interface inputItem {
  id: string;
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
  itemType: string;
  editedItemIndex: number;
  isEdit: boolean;
  isPreview: boolean;
}

type FormAction =
  | { type: "getStarted" }
  | { type: "openModal"; payload: string }
  | { type: "closeModal" }
  | { type: "reset" }
  | { type: "removeItem"; payload: string }
  | { type: "editItem"; payload: string }
  | { type: "restEditItem" }
  | { type: "createForm" };

const initialState: FormState = {
  isStarted: false,
  userItems: userItems,
  isModalOpen: false,
  itemType: "",
  editedItemIndex: -1,
  isEdit: false,
  isPreview: false,
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
    case "createForm":
      return { ...state, isPreview: !state.isPreview };
    case "openModal":
      return { ...state, isModalOpen: true, itemType: action.payload };
    case "closeModal":
      return { ...state, isModalOpen: false };
    case "restEditItem":
      return {
        ...state,
        isEdit: false,
        editedItemIndex: (state.editedItemIndex = -1),
      };
    case "reset":
      return { ...state, userItems: [] };
    case "removeItem":
      return {
        ...state,
        userItems: state.userItems.filter((item) => item.id !== action.payload),
      };
    case "editItem":
      return {
        ...state,
        editedItemIndex: state.userItems.findIndex(
          (item) => item.id === action.payload
        ),
        isModalOpen: true,
        isEdit: true,
      };

    default:
      throw new Error("Unknown action");
  }
}
