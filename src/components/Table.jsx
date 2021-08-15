export function Table({ data }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Location</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>
                    {item.loc[0]}, {item.loc[1]}
                  </td>
                  <td>{item.pop}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
