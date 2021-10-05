import { Link } from "react-router-dom";
import menuItems from "../api/header.data";
import IPageProps from "../interfaces/page";

const NavBar: React.FunctionComponent<IPageProps> = () => {
  return (
    <nav className="navbar justify-between">
      <Link to="/" className="link site-title">
        RS
      </Link>
      <ul className="display-f">
        {menuItems.map((menuItem, index) => (
          <Link
            key={index}
            to={menuItem.path}
            className="link text-gray ml-1 text-hover-secondary"
          >
            {menuItem.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
