import { useState, useEffect } from "react";
import { useProvider } from "../context/Context";
export function Search() {
  const [input, setInput] = useState("");

  const { dispatch } = useProvider();
  useEffect(() => {
    if (input === "") {
      dispatch({ type: "SEARCH_VALUE", payload: input });
    }
  }, [input]);

  return (
    <div className="space">
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <select
        onChange={(e) => {
          dispatch({ type: "SEARCH_BY", payload: e.target.value });
        }}
      >
        <option value="city">City</option>
        <option value="state">State</option>
      </select>
      <button
        onClick={() => {
          dispatch({ type: "SEARCH_VALUE", payload: input });
        }}
      >
        search
      </button>
    </div>
  );
}
