const List = ({ users }) => {
  return (
      <table className="table my-4 table-dark table-responsive table-striped table-hover">
        {/* bootstrap table lari 2 ana parcadan olusur . bunlar <thead> ve <tbody> */}
        <thead>
          <tr>
            <th>İsim </th>
            <th>Mail</th>
            <th>Yaş</th>
          </tr>
        </thead>

        <tbody data-testid="table-body">
          {users.map((user ,index ) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.mail}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default List;
