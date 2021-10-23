import classes from "../../styles/css/AuthBtn.module.css";

const AuthBtn = ({ className, children, disabled, loading, ...rest }: any) => {
  return (
    <button
      className={`${classes.submit} ${className}`}
      disabled={disabled}
      {...rest}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span style={{ textAlign: "center" }}>
        {loading ? loading : children}
      </span>
    </button>
  );
};
export default AuthBtn;
