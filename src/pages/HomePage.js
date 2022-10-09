import { Link } from "react-router-dom";

const userID = 1;

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/users">Usuarios</Link>
      <br/>
      <Link to={`/user/${userID}`}>Usuarios</Link>
    </div>
  );
}

export default HomePage;
