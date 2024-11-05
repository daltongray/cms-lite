import { GenericObject } from "./useFormTypes";

export const processInitialData = (data: GenericObject = {}) => {
  const formData = {} as any;

  for (const key in data) {
    formData[key] = {
      id: key,
      value: data[key],
    };
  }

  return formData;
};
