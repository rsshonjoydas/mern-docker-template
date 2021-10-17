import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Drawer = ({ children }: any) => {
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
          <span>{children}</span>
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

export default Drawer;
