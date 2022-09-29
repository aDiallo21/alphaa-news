import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <h1 className="header">Alphaa News</h1>
      </Link>
      <Link className="link" to="/articles">
        Articles
      </Link>
      <Link className="link" to="/topics">
        Topics
      </Link>
      <Link className="link" to="/users">
        Users
      </Link>
    </nav>
  );
};
export default Header;
