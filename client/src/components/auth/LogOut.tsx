import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const LogOut = ({ logout }: any) => {
  useEffect(() => {
    logout();
  }, [logout]);
  return null;
};

const mapDispatchToProps = {
  logout: actions.SignOut,
};

export default connect(null, mapDispatchToProps)(LogOut);
