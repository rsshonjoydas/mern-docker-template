import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import menuItems from "./navbar.data";

const MobileDrawer = () => {
  const [drawer, setDrawer] = useState(false);

  const showDrawer = () => setDrawer(!drawer);

  return (
    <>
      <Link to="#" className="drawer-icon">
        <FaBars
          className="link mt-2 ml-1 text-gray text-hover-secondary"
          onClick={showDrawer}
        />
      </Link>
      <nav
        className={
          drawer ? "drawer-menu active bg-white text-gray" : "drawer-menu"
        }
      >
        <ul className="drawer display-f" onClick={showDrawer}>
          <span>
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
          </span>
          <span>
            <Link to="#" className="drawer-icon">
              <AiOutlineClose className="text-gray text-hover-secondary" />
            </Link>
          </span>
        </ul>
      </nav>
    </>
  );
};

export default MobileDrawer;
