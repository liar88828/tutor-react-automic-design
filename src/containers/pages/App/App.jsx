import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Dashboard from "../Dasboard/Dashboard";
import Register from "../Register/Register";

// import { Home } from "./container/Home/Home";

function App() {


	return (
		<BrowserRouter>

			<div className='app'>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/Dashboard  '>Dashboard</Link>
						</li>
						<li>
							<Link to='/Register'>Register</Link>
						</li>
					</ul>
				</nav>
				< Routes>
					<Route path='/' exact element={<Login/>}/>
					<Route path='/Dashboard' element={<Dashboard/>}/>
					<Route path='/Register' element={<Register/>}/>
				</Routes>
			</div>
		</BrowserRouter>

	);


}


export default App;
