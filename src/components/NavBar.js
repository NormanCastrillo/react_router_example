import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink-selected" : "navlink-unselected"
            }
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink-selected" : "navlink-unselected"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
