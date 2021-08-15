import { createContext, useContext, useReducer, useEffect } from "react";
import { Reducer } from "../reducer/Reducer";
import axios from "axios";

const ContextVariable = createContext();

export function ContextProvider({ children }) {
  const [
    { page, sortBy, filterBy, searchBy, searchValue },
    dispatch
  ] = useReducer(Reducer, {
    page: 1,
    sortBy: "relevance",
    filterBy: {},
    searchBy: "city",
    searchValue: ""
  });

  return (
    <ContextVariable.Provider
      value={{ page, sortBy, filterBy, dispatch, searchBy, searchValue }}
    >
      {children}
    </ContextVariable.Provider>
  );
}

export function useProvider() {
  return useContext(ContextVariable);
}
