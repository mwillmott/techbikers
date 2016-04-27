import { compose, createStore, applyMiddleware } from "redux";
import persistState from "redux-localstorage";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";

import apiMiddleware from "../middleware/api";
import analyticsMiddleware from "../middleware/analytics";
import rootReducer from "../reducers";

export default function configureStore(initialState = {}) {

  const loggerMiddleware = createLogger();

  const authenticationSlicer = () => state => {
    const { state: authState } = state.authentication

    if (authState === "authenticated") {
      return {
        authentication: state.authentication
      }
    } else {
      return {}
    }
  }

  const enhancer = compose(
    persistState(null, {
      slicer: authenticationSlicer
    }),
    applyMiddleware(
      apiMiddleware,
      thunkMiddleware,
      routerMiddleware(browserHistory),
      loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(require("../reducers").default)
    });
  }

  return store;
}
