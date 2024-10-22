import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">HomeLogo</Link>
      <NavLink to="/box-shadow">Box Shadow</NavLink>
    </div>
  );
};

export default Navbar;
