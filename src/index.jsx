import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/pages/App/App";
import {analytics} from "./config/firebase";

// console.log(configFirebase)
console.log(analytics)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);
