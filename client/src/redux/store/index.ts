import { getFirebase } from "react-redux-firebase";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirestore, reduxFirestore } from "redux-firestore";
import logger from "redux-logger";
import thunk from "redux-thunk";
import firebase from "../../firebase/firebase";
import reducers from "../reducers";

const store = createStore(
  reducers,
  composeWithDevTools(
    reduxFirestore(firebase),
    applyMiddleware(
      logger,
      thunk.withExtraArgument({ getFirebase, getFirestore })
    )
  )
);

export default store;
