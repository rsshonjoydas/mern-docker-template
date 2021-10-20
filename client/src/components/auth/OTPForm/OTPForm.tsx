import { useState } from "react";
import IPageProps from "../../../interfaces/page";
import classes from "../../../styles/css/AuthForm.module.css";
import btnStyle from "../../../styles/css/Button.module.css";
import Button from "../../button/Button";

const OTPForm: React.FunctionComponent<IPageProps> = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element: any, index: any) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className={classes.form}>
        <div className={`text-center ${classes.primaryForm}`}>
          <h2 className={classes.formTitle}>OTP Verification</h2>
          <p className={`mb-1 ${classes.smallText}`}>
            Enter the OTP sent to you to verify your identity
          </p>

          {otp.map((data, index) => {
            return (
              <input
                className={classes.otpField}
                type="text"
                name="otp"
                maxLength={1}
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}

          <p className="mt-1">OTP Entered - {otp.join("")}</p>
          <div className="display-f">
            <Button
              className={btnStyle.secondaryBtn}
              onClick={(e: any) => setOtp([...otp.map((v: any) => "")])}
            >
              Clear
            </Button>
            <Button
              className={btnStyle.primaryBtn}
              onClick={(e: any) => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPForm;
