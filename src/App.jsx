import React from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import Login from "./containers/pages/Login/Login";
// import Dashboard from "./containers/pages/Dasboard/Dashboard";
// import Register from "./containers/pages/Register/Register";
// import { Provider } from "react-redux";
// import {store} from "../../../config/redux/redux";

// import { Home } from "./container/Home/Home";

function App() {
	const [data, setData] = useState({
		input: {
			nama: '',
			alamat: '',
			telp: ''
		}
	});

	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	let form = { ...data.input };
	// 	form = e.target.value;
	// 	console.log(form);
	// 	// setData({ input: form });
	// };


	const submit = (e) => {
		e.preventDefault();

		console.log(data.input);

	};

	return (
		// <Provider>{/*dari createStore*/}
		<BrowserRouter>
			<div className='app'>


				<h1>
					hahaha

					<form onClick={submit}>
						<input type="text" onChange={(e) => {
							setData({}.e.target.value);
						}} />
						<input type="text" onChange={(e) => {
							setData(e.target.value);
						}} />
						<input type="text" onChange={(e) => {
							setData(e.target.value);
						}} />
						<button>Add</button>

					</form>
				</h1>
				{/* <nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/Dashboard'>Dashboard</Link>
							</li>
							<li>
								<Link to='/Register'>Register</Link>
							</li>
						</ul>
					</nav> */}
				{/* < Routes> */}
				{/* <Route path='/' exact element={<Login/>}/>
					<Route path='/Dashboard' element={<Dashboard/>}/>
					<Route path='/Register' element={<Register/>}/> */}
				{/* </Routes> */}
			</div>
		</BrowserRouter>
		// </Provider>

	);


}


export default App;
