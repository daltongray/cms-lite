---
to: ./use<%= name %>Form.tsx
---
import {FormUtilType, useForm} from "@change-my-story/component-library";

export type <%= name %>FormData = {
  //
};

export type <%= name %>FormState = {
  //
};

export type <%= name %>FormUtil = FormUtilType<<%= name %>FormData, <%= name %>FormState>

export const use<%= name %>Form = () => {
  const initialData = {} as <%= name %>FormData;
  const initialState = {} as <%= name %>FormState;

  const <%= h.changeCase.camel(name) %>Form = useForm<<%= name %>FormData, <%= name %>FormState>(
    initialData,
    initialState
  );

  return <%= h.changeCase.camel(name) %>Form;
};


