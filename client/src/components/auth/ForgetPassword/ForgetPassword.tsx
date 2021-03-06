// TODO: External imports
import { Form, Formik } from "formik";
import * as Yup from "yup";
// TODO: Internal imports
import IPageProps from "../../../interfaces/page";
import classes from "../../../styles/css/AuthForm.module.css";
import FormikControl from "../../forms/FormikControl";

// TODO: Formik initial value
const initialValues = {
  email: "",
};

// TODO: Formik validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format!")
    .required("The email is required"),
});

// TODO: React Functional Component
const ForgetPassword: React.FunctionComponent<IPageProps> = () => {
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
            <h2 className={classes.formTitle}>Forget Password</h2>
            <FormikControl
              control="input"
              type="email"
              name="email"
              placeholder="Username or Email"
            />
            <input type="submit" disabled={!formik.isValid} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgetPassword;
