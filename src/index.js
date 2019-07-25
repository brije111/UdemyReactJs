import React from "react";
import ReactDOM from "react-dom";
import App from "./songs_project/components/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./songs_project/reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
