import { Link } from "react-router-dom";
import icons from "./socia-iIcon-data";

const SocialIcon = () => {
  return (
    <div>
      {icons.map((icon) => {
        return (
          <Link key={icon.id} to={icon.path}>
            <i className={`text-gray ml-1 text-hover-secondary ${icon.icon}`} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcon;
