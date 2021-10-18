import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../../components/button/AuthBtn";
import classes from "../../../styles/css/login.module.css";
import FormikControl from "../../forms/FormikControl";
import SocialAuth from "../social/SocialAuth";

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

const SingUpForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };

  return (
    <section className={classes.loginForm}>
      <div className={classes.loginBox}>
        <h2>Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={onSubmit}
        >
          {/* //? input box */}
          {(formik) => (
            <Form>
              <div className={classes.userBox}>
                <FormikControl
                  control="input"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className={classes.userBox}>
                <FormikControl
                  control="input"
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
              <div className={classes.userBox}>
                <FormikControl
                  control="input"
                  placeholder="email"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className={classes.userBox}>
                <FormikControl
                  control="input"
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className={classes.userBox}>
                <FormikControl
                  control="input"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className={classes.link}>
                {/*//? forget password */}
                <Link className={classes.smallText} to="{#}">
                  Forget your password?
                </Link>
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
              <Button type="submit">
                <span>Submit</span>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default SingUpForm;
