export function Reducer(State, action) {
  switch (action.type) {
    case "RESET":
      return {
        ...State,
        page: 1,
        sortBy: "relevance",
        filterBy: {},
        searchBy: "city",
        searchValue: ""
      };

    case "SEARCH_VALUE":
      return { ...State, searchValue: action.payload };

    case "SEARCH_BY":
      return { ...State, searchBy: action.payload };

    case "SORT_BY":
      return { ...State, sortBy: action.payload };

    case "FILTER_BY":
      let { city, state } = action.payload;
      if (city && "city" in State.filterBy) {
        console.log("city", city);
        if (State.filterBy.city.includes(city[0])) {
          return {
            ...State,
            filterBy: {
              ...State.filterBy,
              city: State.filterBy.city.filter((item) => item !== city[0])
            }
          };
        }
        return {
          ...State,
          filterBy: {
            ...State.filterBy,
            city: [...State.filterBy.city, city[0]]
          }
        };
      }
      if (state && "state" in State.filterBy) {
        if (State.filterBy.state.includes(state[0])) {
          return {
            ...State,
            filterBy: {
              ...State.filterBy,
              state: State.filterBy.state.filter((item) => item !== state[0])
            }
          };
        }
        return {
          ...State,
          filterBy: {
            ...State.filterBy,
            state: [...State.filterBy.state, state[0]]
          }
        };
      }

      return { ...State, filterBy: { ...State.filterBy, ...action.payload } };

    case "PAGE_NO":
      return { ...State, page: action.payload };
    default:
      break;
  }
}
