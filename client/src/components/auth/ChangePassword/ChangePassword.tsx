// TODO: External imports
import { Form, Formik } from "formik";
import * as Yup from "yup";
// TODO: Internal imports
import IPageProps from "../../../interfaces/page";
import classes from "../../../styles/css/AuthForm.module.css";
import FormikControl from "../../forms/FormikControl";

// TODO: Formik initial value
const initialValues = {
  password: "",
  confirmPassword: "",
};

// TODO: Formik validation schema
const validationSchema = Yup.object({
  oldPassword: Yup.string().required("The old password is required."),
  newPassword: Yup.string()
    .required("The new password is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password."),
});

// TODO: React Functional Component
const ChangePassword: React.FunctionComponent<IPageProps> = () => {
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
            <h2 className={classes.formTitle}>Change Password</h2>
            <FormikControl
              control="input"
              type="password"
              name="oldPassword"
              placeholder="Old Password"
            />
            <FormikControl
              control="input"
              type="password"
              name="newPassword"
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

export default ChangePassword;
