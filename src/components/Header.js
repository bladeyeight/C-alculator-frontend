import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>C#alcuator</div>
      </Link>
      <Link to="/history">
        <div>History</div>
      </Link>
    </nav>
  );
}

export default Header;