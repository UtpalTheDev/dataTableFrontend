export function Filter({ dispatch }) {
  return (
    <div className="space">
      <div>Filter </div>
      <hr />
      <div style={{ padding: "0.5rem 0" }}>
        <div>City</div>
        <input
          type="checkbox"
          onChange={() => {
            dispatch({ type: "FILTER_BY", payload: { city: ["CHICAGO"] } });
          }}
        />{" "}
        chicago
        <input
          type="checkbox"
          onChange={() => {
            dispatch({ type: "FILTER_BY", payload: { city: ["BELL"] } });
          }}
        />
        BELL
      </div>
      <div style={{ padding: "0.5rem 0" }}>
        <div>State</div>
        <input
          type="checkbox"
          onChange={() => {
            dispatch({ type: "FILTER_BY", payload: { state: ["NY"] } });
          }}
        />{" "}
        NY
        <input
          type="checkbox"
          onChange={() => {
            dispatch({ type: "FILTER_BY", payload: { state: ["MA"] } });
          }}
        />
        MA
      </div>
    </div>
  );
}
