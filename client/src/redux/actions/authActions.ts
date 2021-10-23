import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase";
import * as actions from "../actionTypes/authActionType";

// TODO: Sign up action creator
export const SignUp =
  ({ email, password }: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: actions.AUTH_START });
    try {
      createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.AUTH_FAIL, payload: err.message });
      console.log(err.message);
    }
    dispatch({ type: actions.AUTH_END });
  };

// TODO: Logout action creator
export const SignOut = () => async () => {
  try {
    signOut(auth);
  } catch (err) {
    console.log(err.message);
  }
};

// TODO: Login action creator
export const SignIn =
  ({ email, password }: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: actions.AUTH_START });
    try {
      signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.AUTH_FAIL, payload: err.message });
    }
    dispatch({ type: actions.AUTH_END });
  };

// TODO: Clean up messages
export const clean = () => ({
  type: actions.CLEAN_UP,
});