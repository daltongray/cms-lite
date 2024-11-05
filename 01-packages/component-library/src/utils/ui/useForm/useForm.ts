import { useEffect, useState } from "react";

import { FormTypes, GenericObject } from "./useFormTypes";
import { processInitialData } from "./processInitialData";

// These types help TS infer Data and State generics from the hooks params when invoked.
type D<Data extends GenericObject = GenericObject> = Data;
type S<State extends GenericObject = GenericObject> = State;

export const useForm = <
  Data extends GenericObject,
  State extends GenericObject
>(
  initialData: D<Data>,
  initialState: S<State>
): FormTypes<Data, State>["Util"] => {
  const [initialDataCached, setInitialData] = useState(initialData);

  const [validationConfig, setValidationConfig] =
    useState<FormTypes<Data, State>["ValidationConfig"]>();

  const [formData, setFormData] = useState<FormTypes<Data, State>["FormData"]>(
    processInitialData(initialData)
  );
  const [formState, setFormState] = useState(initialState);

  const [hasChanged, setHasChanged] = useState(false);

  const [lastChange, setLastChanged] = useState(Date.now());

  const resetForm: FormTypes<Data, State>["Util"]["resetForm"] = (
    initialData,
    initialState
  ) => {
    setFormData(processInitialData(initialData));
    setInitialData(initialData);
    if (initialState) setFormState(initialState);
    setLastChanged(Date.now());
  };

  useEffect(() => {
    let foundChange = false;

    for (const field in formData) {
      if (foundChange) continue;

      const newValueToTest =
        formData[field as keyof FormTypes<Data, State>["FormData"]].value;

      if (newValueToTest !== initialDataCached[field]) foundChange = true;
    }

    if (foundChange && !hasChanged) {
      setHasChanged(foundChange);
      return;
    }

    if (!foundChange && hasChanged) {
      setHasChanged(foundChange);
    }
  }, [lastChange]);

  const updateFormData: FormTypes<Data, State>["Util"]["updateFormData"] = (
    updates,
    stateUpdates
  ) => {
    let newState = formState;

    if (stateUpdates) {
      setFormState((prevState) => {
        newState = { ...prevState };

        for (const key in stateUpdates) {
          newState[key] = stateUpdates[key] as State[typeof key];
        }

        return newState;
      });
    }

    setFormData((prevState) => {
      const newData = { ...prevState };

      for (const key in updates) {
        // errors are passed in to set validation errors
        if (updates[key] instanceof Error) continue;

        if (newData[key] === undefined) {
          newData[key] = { id: key, value: updates[key] as Data[typeof key] };
        } else {
          newData[key].value = updates[key] as Data[typeof key];
        }
      }

      // interdependent validation chains require that we update state before validating
      if (validationConfig) {
        const updateKeys = Object.keys(updates);

        const requiresValidation = Object.keys(validationConfig).findIndex(
          (validationKey) => updateKeys.includes(validationKey)
        );

        if (requiresValidation === -1) return newData;
      }

      for (const key in updates) {
        if (validationConfig && validationConfig[key]) {
          // Had to add this duplicated check to help the compiler.

          if (updates[key] instanceof Error) {
            const error = updates[key] as Error;
            newData[key].isError = true;
            newData[key].validationText = error.message;
            continue;
          }

          const validator = validationConfig[key];
          if (!validator) continue;
          const validationResponse = validator(
            updates[key] as Data[typeof key],
            {
              newData,
              newState,
              reValidateField: (field: keyof Data) =>
                reValidateField(field, newData, newState),
            }
          );

          const { isError = false, validationText = "" } =
            validationResponse || {};
          newData[key].isError = isError;
          newData[key].validationText = validationText;
        }
      }

      return newData;
    });
    setLastChanged(Date.now());
  };

  const updateFormState: FormTypes<Data, State>["Util"]["updateFormState"] = (
    updates
  ) => {
    setFormState((prevState) => {
      const newState = { ...prevState, ...updates };

      const validationUpdates = {} as FormTypes<
        Data,
        State
      >["ValidationUpdates"];

      for (const key in validationConfig) {
        // Had to add this duplicated check to help the compiler.
        const validator = validationConfig[key];
        if (!validator) continue;
        const validationResponse = validator(
          formData[key]?.value as Data[typeof key],
          {
            newData: formData,
            newState,
            reValidateField: (field: keyof Data) =>
              reValidateField(field, formData, formState),
          }
        );
        const { isError = false, validationText = "" } =
          validationResponse || {};

        if (validationUpdates[key] === undefined) {
          validationUpdates[key] = {
            isError: isError,
            validationText: validationText,
          };
        } else {
          validationUpdates[key].isError = isError;
          validationUpdates[key].validationText = validationText;
        }
      }

      // if validation caught an error, we need to update it in the form
      setFormData((prevState) => {
        const newData = { ...prevState };

        for (const key in newData) {
          if (prevState[key] === undefined) {
            newData[key] = {
              id: key,
              value: initialDataCached[key],
              ...validationUpdates[key],
            };
          } else {
            newData[key] = { ...prevState[key], ...validationUpdates[key] };
          }
        }

        return newData;
      });
      return newState;
    });
  };

  const reValidateField = (
    field: keyof Data,
    advanceData: FormTypes<Data, State>["FormData"],
    advanceState: State
  ) => {
    setFormData((prev) => {
      if (!validationConfig) {
        return prev;
      }

      const validator = validationConfig[field];

      if (!validator) return prev;

      const validationResponse = validator(formData[field].value, {
        newData: advanceData,
        newState: advanceState,
        reValidateField: (field) => {
          console.warn(
            "Revalidate field was called from within revalidate field. This is likely to cause a circular dependency. Validation was stopped."
          );
          const { isError = false, validationText = "" } =
            advanceData[field] || {};
          return { isError, validationText };
        },
      });

      const { isError = false, validationText = "" } = validationResponse || {};

      if (prev[field]) {
        return {
          ...prev,
          [field]: {
            ...prev[field],

            isError,
            validationText,
          },
        };
      } else {
        return {
          ...prev,
          [field]: {
            isError,
            validationText,
          },
        };
      }
    });
  };

  const getValidatedFormData = ({ updatesOnly = false } = {}) => {
    const validationUpdates = {} as FormTypes<Data, State>["ValidationUpdates"];

    let shouldFail;

    if (validationConfig) {
      for (const key in validationConfig) {
        // Had to add this duplicated check to help the compiler.
        const validator = validationConfig[key];
        if (!validator) continue;
        const validationResponse = validator(
          formData[key]?.value as Data[typeof key],
          {
            newData: formData,
            newState: formState,
            reValidateField: (field: keyof Data) =>
              reValidateField(field, formData, formState),
          }
        );
        const { isError = false, validationText = "" } =
          validationResponse || {};

        if (validationUpdates[key] === undefined) {
          validationUpdates[key] = {
            isError: isError,
            validationText: validationText,
          };
        } else {
          validationUpdates[key].isError = isError;
          validationUpdates[key].validationText = validationText;
        }

        if (isError) shouldFail = true;
      }

      // if validation caught an error, we need to update it in the form

      setFormData((prevState) => {
        const newState = { ...prevState };

        for (const key in newState) {
          if (prevState[key] === undefined) {
            newState[key] = {
              id: key,
              value: initialDataCached[key],
              ...validationUpdates[key],
            };
          } else {
            newState[key] = { ...prevState[key], ...validationUpdates[key] };
          }
        }

        return newState;
      });
    }

    if (shouldFail) return false;

    // if we made it through validation
    // we can return the value of each entry
    const result = {} as Data;

    for (const key in formData) {
      if (updatesOnly && formData[key].value === initialDataCached[key])
        continue;

      result[key] = formData[key].value as Data[typeof key];
    }

    return result;
  };

  const getFreshData = () => {
    let state = formData;
    setFormData((prev) => {
      state = prev;
      return prev;
    });

    return state;
  };

  const getFreshState = () => {
    let state = formState;
    setFormState((prev) => {
      state = prev;
      return prev;
    });

    return state;
  };

  return {
    formData,
    formState,
    getFreshData,
    getFreshState,
    getValidatedFormData,
    getValidatedFormDataUpdates: () =>
      getValidatedFormData({ updatesOnly: true }),
    hasChanged,
    resetForm,
    setFormData,
    setValidationConfig,
    updateFormData,
    updateFormState,
  };
};

export type FormUtilType<Data, State> = FormTypes<Data, State>["Util"];
