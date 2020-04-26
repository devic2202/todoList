import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import thunk from 'redux-thunk';
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import * as rootReducer from "./store";
import {createLogger} from "redux-logger"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers(rootReducer)
const store = createStore(rootReducers,composeEnhancer(applyMiddleware(createLogger(),thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
