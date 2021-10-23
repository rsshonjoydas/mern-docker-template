// TODO: External imports
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// TODO: Internal imports
import Button from "../../../components/button/AuthBtn";
import * as actions from "../../../redux/actions";
import classes from "../../../styles/css/AuthForm.module.css";
import FormikControl from "../../forms/FormikControl";
import SocialAuth from "../social/SocialAuth";

// TODO: Formik initial value
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// TODO: Formik validation schema
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password."),
});

// TODO: React Functional Component
const SingUpForm = ({ signUp, loading, error, cleanUp }: any) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };
  const toggleConfirmPassword = () => {
    setConfirmPasswordShow(!confirmPasswordShow);
  };

  return (
    <>
      <div className={classes.form}>
        <div className={classes.primaryForm}>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await signUp(values);
              setSubmitting(false);
            }}
          >
            {/* //? input box */}
            {({ isSubmitting, isValid }) => (
              <Form>
                <h2 className={classes.formTitle}>Sign Up</h2>
                <div className={classes.userBox}>
                  <FormikControl
                    control="input"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div className={classes.userBox}>
                  <FormikControl
                    control="input"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                  />
                </div>
                <div className={classes.userBox}>
                  <FormikControl
                    control="input"
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                </div>
                {/* //? Password Field */}
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
                {/* //? Confirm Password Field */}
                <div className={classes.userBox}>
                  <FormikControl
                    control="input"
                    placeholder="Confirm Password"
                    type={confirmPasswordShow ? "text" : "password"}
                    name="confirmPassword"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPassword}
                    className={classes.passwordToggleIcon}
                  >
                    {confirmPasswordShow ? (
                      <i className="fas fa-eye-slash" />
                    ) : (
                      <i className="fas fa-eye"></i>
                    )}
                  </button>
                </div>
                <div className={classes.link}>
                  {/* //? social sign up login */}
                  <p className={classes.socialText}>
                    Or Sign Up with social platforms
                  </p>
                  <SocialAuth />
                  {/* //? sign up link */}
                  <span className={classes.smallText}>
                    Already have an account?
                  </span>{" "}
                  <span className={classes.or}>Or </span>
                  <Link to="/login" className={classes.signupText}>
                    Sign In
                  </Link>
                </div>
                {/* //? submit button */}
                <Button
                  disabled={!isValid || isSubmitting}
                  loading={loading ? "Signing up..." : null}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <span>{error}</span>
    </>
  );
};

const mapStateToProps = ({ auth }: any) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.SignUp,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingUpForm);
