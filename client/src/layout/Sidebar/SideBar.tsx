import { Link } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import menuItems from "./sidebar.data";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <nav className="side-nav">
          <Link to="/" className="link site-title">
            RS
          </Link>
          <ul>
            {menuItems.map((menuItem, index) => (
              <Link
                key={index}
                to={menuItem.path}
                className="link side-nav__link"
              >
                <i className={menuItem.icon}></i>
                {menuItem.label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <MobileSidebar />
    </>
  );
};

export default SideBar;
