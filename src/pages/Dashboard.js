import { useNavigate, Outlet} from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const showWelcome = () => {
    navigate("welcome");
  };

  return (
    <>
      <div>Dashboard</div>
      <button onClick={handleClick}>Logout</button>
      <button onClick={showWelcome}>show welcome</button>
      <Outlet/>
    </>
  );
}

export default Dashboard;
