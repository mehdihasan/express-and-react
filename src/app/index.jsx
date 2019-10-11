console.log("Hello Additude! with hot reloading probably!");

import { store } from './store'

console.log(store.getState());

import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/Main";

ReactDOM.render (
    <Main />,
    document.getElementById("app")
)