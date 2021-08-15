export function Sort({ dispatch }) {
  return (
    <div className="space">
      Sort <hr />
      <select
        onChange={(e) => {
          dispatch({ type: "SORT_BY", payload: e.target.value });
        }}
      >
        <option value="pop_asc">Population Asc</option>
        <option value="pop_desc">Population Desc</option>
        <option value="city_asc">City Asc</option>
        <option value="city_desc">City Desc</option>
        <option value="state_asc">State Asc</option>
        <option value="state_desc">State Desc</option>
      </select>
    </div>
  );
}
