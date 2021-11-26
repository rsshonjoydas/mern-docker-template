// TODO: External imports
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import * as actions from "../../../redux/actions";
// TODO: Internal imports
import classes from "../../../styles/css/AuthForm.module.css";
import Button from "../../button/AuthBtn";
import FormikControl from "../../forms/FormikControl";
import SocialAuth from "../social/SocialAuth";

// TODO: Formik initial value
const initialValues = {
  email: "",
  password: "",
};

// TODO: Formik validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format!")
    .required("The email is required."),
  password: Yup.string().required("The password is required."),
});

// TODO: React Functional Component
const LoginForm = ({ login, loading, error, cleanUp }: any) => {
  const [passwordShow, setPasswordShow] = useState(false);

  //* private route
  const history = useHistory();
  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: "/dashboard" } };

  // * clean up useEffect
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  // * show and hide password toggle function
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  // * form submit function
  const onSubmit = async (values: any, { setSubmitting, redirect }: any) => {
    await login(values);
    setSubmitting(false);
    if (!redirect) {
      history.replace(from);
    }
  };

  return (
    <div className={classes.form}>
      <div className={classes.primaryForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {/* //? input box */}
          {({ isSubmitting, isValid }) => (
            <Form>
              <h2 className={classes.formTitle}>Login</h2>
              <div className={classes.userBox}>
                <FormikControl
                  control="input"
                  placeholder="Email"
                  type="text"
                  name="email"
                />
              </div>
              <div className={`display-f ${classes.userBox}`}>
                <FormikControl
                  control="input"
                  placeholder="Password"
                  type={passwordShow ? "text" : "password"}
                  name="password"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className={classes.passwordToggleIcon}
                >
                  {passwordShow ? (
                    <i className="fas fa-eye-slash" />
                  ) : (
                    <i className="fas fa-eye"></i>
                  )}
                </button>
              </div>
              <div className={classes.link}>
                {/*//? forget password */}
                <Link className={classes.smallText} to="/forget-password">
                  Forget your password?
                </Link>
                {/* //? social sign up login */}
                <p className={classes.socialText}>
                  Or Sign In with social platforms
                </p>
                <SocialAuth />
                {/* //? sign up link */}
                <span className={classes.smallText}>
                  Don't have an account?
                </span>{" "}
                <span className={classes.or}>Or </span>
                <Link to="/signup" className={classes.signupText}>
                  Sign Up
                </Link>
              </div>
              {/* //? submit button */}
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                loading={loading ? "Logging in..." : null}
              >
                <span>Submit</span>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }: any) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  login: actions.SignIn,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
