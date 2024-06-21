import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import {analytics} from "./config/firebase/Firebase";

// console.log(configFirebase)
// console.log(analytics)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);