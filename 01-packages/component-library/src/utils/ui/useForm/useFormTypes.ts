import { Dispatch, SetStateAction } from "react";

export type GenericObject = Record<string, any>;

export type FormTypes<Data, State> = {
  ErrorPayload: {
    isError?: boolean;
    validationText?: string;
  };
  FormData: {
    [Property in keyof Data]: {
      value: Data[Property];
      id: keyof Data;
    } & FormTypes<Data, State>["ErrorPayload"];
  };
  ValidationUpdates: {
    [Property in keyof Data]: FormTypes<Data, State>["ErrorPayload"];
  };
  ValidationHelpers: {
    reValidateField: (field: keyof Data) => void;
    newData: FormTypes<Data, State>["FormData"];
    newState: State;
  };
  ValidationConfig: Partial<{
    [Property in keyof Data]: (
      fieldValue: Data[Property],
      validationHelpers: FormTypes<Data, State>["ValidationHelpers"]
    ) => FormTypes<Data, State>["ErrorPayload"] | void;
  }>;
  Util: {
    formData: FormTypes<Data, State>["FormData"];
    formState: State;
    getFreshData: () => FormTypes<Data, State>["FormData"];
    getFreshState: () => State;
    hasChanged: boolean;
    updateFormData: (
      dataUpdates: Partial<Data> | Partial<Record<keyof Data, Error>>,
      stateUpdates?: Partial<State>
    ) => void;
    updateFormState: (stateUpdates?: Partial<State>) => void;
    setValidationConfig: (
      validationConfig: FormTypes<Data, State>["ValidationConfig"]
    ) => void;
    resetForm: (initialData: Data, initialState?: State) => void;
    setFormData: Dispatch<SetStateAction<FormTypes<Data, State>["FormData"]>>;

    getValidatedFormData: () => Data | false;
    getValidatedFormDataUpdates: () => Partial<Data> | false;
  };
};
