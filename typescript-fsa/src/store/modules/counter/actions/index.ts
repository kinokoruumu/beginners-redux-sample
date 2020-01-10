import actionCreatorFactory from "typescript-fsa";
const actionCreator = actionCreatorFactory("counter");

export const increment = actionCreator("INCREMENT");
export const decrement = actionCreator("DECREMENT");

export type AddPyload = number;
export const add = actionCreator<AddPyload>("ADD");
