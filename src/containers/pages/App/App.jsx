import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Dashboard from "../Dasboard/Dashboard";
import Register from "../Register/Register";
import {Provider} from "react-redux";
import {store} from "../../../config/redux/redux";

// import { Home } from "./container/Home/Home";

function App() {
	// const initialStare = {
	// 	// popup: 'false',
	// 	popup: false,
	// 	isLogin: false
	// }
	// const reducer = (state = initialStare, action) => {
	// 	if (action.type === "CHANGE_POPUP") { // harus ada type
	// 		return {
	// 			...state,// harus ada spreadoperator
	// 			popup: action.value
	// 		}
	// 	}
	// 	if (action.type === "CHANGE_ISLOGIN") {
	// 		return {
	// 			...state,
	// 			isLogin: action.value
	// 		}
	// 	}
	// 	return state
	// }//reducer kumpulan instruksi yang di gunakan untuk mengubah store
	//
	// const store = createStore(reducer) // state global yang akan digunakan dimana saja

	return (
		<Provider store={store}>{/*dari createStore*/}

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
		</Provider>

	);


}


export default App;
