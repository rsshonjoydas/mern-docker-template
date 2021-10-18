import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import classes from "../../styles/css/login.module.css";
import Button from "../button/AuthBtn";
import FormikControl from "../forms/FormikControl";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };
  return (
    <div className={classes.loginContainer}>
      <section className={classes.loginForm}>
        <div className={classes.loginBox}>
          <h2>Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {/* //? input box */}
            {(formik) => (
              <Form>
                <div className={classes.userBox}>
                  <FormikControl
                    control="input"
                    placeholder="Email"
                    type="text"
                    name="email"
                    required
                  />
                  {/* <label>Username</label> */}
                </div>
                <div className={classes.userBox}>
                  <FormikControl
                    control="input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    required
                  />
                  {/* <label>Password</label> */}
                </div>
                <div className={classes.link}>
                  {/*//? forget password */}
                  <Link className={classes.smallText} to="{#}">
                    Forget your password?
                  </Link>
                  {/* //? social sign up login */}
                  <p className={classes.socialText}>
                    Or Sign In with social platforms
                  </p>
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
                <Button type="submit">
                  <span>Submit</span>
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
