import { Link } from "react-router";

export default function Users() {
  const userData = [
    { id: 1, name: "Hulk",},
    { id: 2, name: "Undertaker",},
    {id: 3,name: "Rock",},
    {id: 4,name: "Kane",},
    {id: 5,name: "Baista",},
  ];
  return (
    <div className="ml-2">
      <h1>This is a users page</h1>
      {userData.map((user) => (
        <div>
          <h1>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </h1>
        </div>
      ))}

<h1>This is a users page with Optional Segment</h1>
      {userData.map((user) => (
        <div>
          <h1>
            <Link to={`/users/${user.id}/${user.name}`}>{user.name}</Link>
          </h1>
        </div>
      ))}


    </div>
  );
}
