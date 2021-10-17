import Input from "./Input";

const FormikControl = (props: any) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
