import { Reducer, Store } from "@reduxjs/toolkit";

export type ClientStore = Store & {
  injectReducer: (key: string, asyncReducer: Reducer) => any;
  removeReducer: (key: string) => any;
};
