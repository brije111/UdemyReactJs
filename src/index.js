import React from "react";
import ReactDOM from "react-dom";
import App from "./blog_project/components/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./blog_project/reducers";
import thunk from "redux-thunk";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
