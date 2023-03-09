import { Link, useNavigate } from "react-router-dom";
//style
import "./Navbar.scss";
//redux
import { useDispatch } from "react-redux";
import { reset, logout } from "../redux/authStore";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(reset());
    dispatch(logout());
    navigate("/");
  };

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
            <li onClick={handleLogout}>Logout</li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
