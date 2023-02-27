import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="left-content">
        mini<span>AUTH</span>
      </div>
      <div className="right-content">
        {props.isLogin ? (
          <ul>
            <li>Greeting</li>
            <li onClick={props.handleLogout}>Logout</li>
          </ul>
        ) : (
          <div>Login</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
