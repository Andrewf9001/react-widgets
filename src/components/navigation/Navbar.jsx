import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">HomeLogo</Link>

      <NavLink to="/box-shadow">Box Shadow</NavLink>
      <NavLink to="/photo-transformer">Photo Transformer</NavLink>
      <NavLink to="/random-hex">Random Hex</NavLink>
    </div>
  );
};

export default Navbar;
