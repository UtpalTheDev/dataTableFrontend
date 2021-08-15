import { Table, Sort, Filter, Search } from "../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useProvider } from "../context/Context";
import { useLogin } from "../context/LoginContext";
export function Home() {
  const {
    page,
    dispatch,
    sortBy,
    filterBy,
    searchBy,
    searchValue
  } = useProvider();
  const [data, setData] = useState();
  const { logout } = useLogin();
  function filterString() {
    if (Object.keys(filterBy).length > 0) {
      return Object.keys(filterBy).reduce((acc, cur) => {
        let newStr = filterBy[cur].reduce((total, item) => {
          total = total + "&" + cur + "=" + item;
          return total;
        }, "");
        acc = acc + newStr;
        return acc;
      }, "");
    }
    return "";
  }

  useEffect(() => {
    (async () => {
      if (searchValue === "") {
        try {
          let response = await axios.get(
            `https://demo.utpalpati.repl.co/data/?pageNumber=${page}&sort=${sortBy}${filterString()}`
          );
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    })();
    // eslint-disable-next-line
  }, [page, filterBy, sortBy, searchValue]);

  useEffect(() => {
    dispatch({ type: "PAGE_NO", payload: 1 });
    // eslint-disable-next-line
  }, [filterBy, sortBy, searchBy]);

  useEffect(() => {
    (async () => {
      if (searchValue !== "") {
        try {
          let response = await axios.get(
            `https://demo.utpalpati.repl.co/data/search/${searchBy}/?value=${searchValue}&pageNumber=${page}&sort=${sortBy}${filterString()}`
          );
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    })();
    // eslint-disable-next-line
  }, [filterBy, sortBy, searchBy, searchValue, page]);

  function prevClick() {
    if (page !== 1) {
      dispatch({ type: "PAGE_NO", payload: page - 1 });
    }
  }

  function nextClick() {
    dispatch({ type: "PAGE_NO", payload: page + 1 });
  }

  return (
    <>
      <button
        onClick={() => {
          logout();
          dispatch({ type: "RESET" });
        }}
      >
        logout
      </button>
      <Search />
      <Sort dispatch={dispatch} />
      <Filter dispatch={dispatch} />
      <Table data={data} />
      {(page > 1 || data?.length > 0) && (
        <div style={{ paddingTop: "0.5rem" }}>
          <button
            disabled={page !== 1 ? false : true}
            style={{ cursor: page !== 1 ? `pointer` : `not-allowed` }}
            onClick={prevClick}
          >
            Prev
          </button>
          <button
            disabled={data?.length ? false : true}
            style={{ cursor: data?.length ? `pointer` : `not-allowed` }}
            onClick={nextClick}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
