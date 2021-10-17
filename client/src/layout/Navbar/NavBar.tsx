import { Link } from "react-router-dom";
import IPageProps from "../../interfaces/page";
import MobileNavbar from "./MobileNavbar";
import menuItems from "./navbar.data";

const NavBar: React.FunctionComponent<IPageProps> = () => {
  return (
    <>
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
      <MobileNavbar />
    </>
  );
};

export default NavBar;
