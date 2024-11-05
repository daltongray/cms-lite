import { Action } from "@reduxjs/toolkit";

export type StateManager<State> = {
  update: (updates: Partial<State>) => void;
  get: () => State;
  updateAction: Action;
  getSelector: (state: any) => State;
  sliceKey: string;
};
