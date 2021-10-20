import classes from "../../styles/css/Button.module.css";

const Button = ({ children, className, ...rest }: any) => {
  return (
    <div className={classes.frame}>
      <button className={`${classes.customBtn} ${className}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
