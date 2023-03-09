import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="left-content">
        mini<span>AUTH</span>
      </div>
      <div className="right-content">
        {props.isLogin ? (
          <ul>
            <li>
              <Link to="/">DailyLog</Link>
            </li>
            <li>
              <Link to="/goal">Goal</Link>
            </li>
            <li onClick={props.handleLogout}>Logout</li>
          </ul>
        ) : (
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
