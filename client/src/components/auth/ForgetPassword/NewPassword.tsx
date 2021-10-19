import { Form, Formik } from "formik";
import * as Yup from "yup";
import IPageProps from "../../../interfaces/page";
import classes from "../../../styles/css/AuthForm.module.css";
import FormikControl from "../../forms/FormikControl";

const validationSchema = Yup.object({
  password: Yup.string()
    .required("The password is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password."),
});

const NewPassword: React.FunctionComponent<IPageProps> = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };

  return (
    <div className={classes.form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className={classes.secondaryForm}>
            <h2 className={classes.formTitle}>New Password</h2>
            <FormikControl
              control="input"
              type="password"
              name="password"
              placeholder="Create New Password"
            />
            <FormikControl
              control="input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
            />
            <input type="submit" disabled={!formik.isValid} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPassword;
