import classes from "../../styles/css/AuthBtn.module.css";

const AuthBtn = ({ className, children, ...rest }: any) => {
  return (
    <a className={`${classes.submit} ${className}`} {...rest}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span style={{ textAlign: "center" }}>{children}</span>
    </a>
  );
};
export default AuthBtn;
