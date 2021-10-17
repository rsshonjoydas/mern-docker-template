import { Link } from "react-router-dom";
import Drawer from "../../components/drawer/Drawer";
import menuItems from "./navbar.data";

const MobileNavbar = () => {
  return (
    <Drawer>
      {menuItems.map((menuItem, index) => {
        return (
          <li key={index} className="nav-text pt-1">
            <Link
              to={menuItem.path}
              className="link text-gray text-hover-secondary"
            >
              <span>{menuItem.label}</span>
            </Link>
          </li>
        );
      })}
    </Drawer>
  );
};

export default MobileNavbar;
