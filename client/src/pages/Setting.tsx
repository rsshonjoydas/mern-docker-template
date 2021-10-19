import { Link } from "react-router-dom";
import IPageProps from "../interfaces/page";

const Setting: React.FunctionComponent<IPageProps> = () => {
  return (
    <div>
      <h1>Setting</h1>
      <Link to="/dashboard/settings/change-password" className="link">
        <h3>Change Password</h3>
      </Link>
    </div>
  );
};

export default Setting;
