import * as React from "react";
import "./index.css";
import {render} from "react-dom"
import {App} from "./app/app";

const root = document.createElement("div");
document.body.appendChild(root);

render(<App/>, root);