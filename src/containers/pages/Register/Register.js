import React, {Component} from 'react';
import './register.scss'
import {Button} from "../../../components/atoms/Button";
import {registerUserApi} from "../../../config/redux/action";
import {connect} from "react-redux";

class Register extends Component {
	state = {
		email: '',
		password: '',
		// loading: false  // test
	}

	handleChangeText = (e) => {
		// console.log(e.target.id)// log id
		this.setState({
			[e.target.id]: e.target.value,
		})
	}

	handleChangeSubmit = () => {
		const {email, password} = this.state
		this.props.registerApi({email, password})
//-------------------------------------------
		// console.log('data send : ', email, password)
		// this.setState({loading: true})
		//
		// setTimeout(() => {
		// 	this.setState({
		// 		loading: false
		// 	})
		// }, 5000)
//---------------------------------------
		// const auth = getAuth(apps);
		// createUserWithEmailAndPassword(auth, email, password)
		// 	.then((userCredential) => {
		// 		// Signed in
		// 		// const user = userCredential.user;
		// 		console.log('success :', userCredential)
		// 		// ...
		// 	})
		// 	.catch((error) => {
		// 		console.log(error)
		// 		// const errorCode = error.code;
		// 		// const errorMessage = error.message;
		// 		// ..
		// 	});
	}

	render() {
		return (
			<div className='auth-container'>
				<div className='auth-card'>
					<h1>Register</h1>
					<h1 className='aunt-title'>Register Page </h1>
					<input type='text'
					       id='email'
					       placeholder='Email'
					       className='input'
					       onChange={this.handleChangeText}

					/>
					<input type='password'
					       id='password'
					       placeholder='Password'
					       className='input'
					       onChange={this.handleChangeText}

					/>
					<Button
						onClick={this.handleChangeSubmit}
						title={"Register"}
						// loading={this.state.loading}
						isLoading={this.props.isLoading}
					/>
				</div>
			</div>
		);
	}
}

const reduxState = (state) => ({ // harus ada ( dan {
	isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
	registerApi: (data) => {
		dispatch(registerUserApi(data))
	}
})

export default connect(reduxState, reduxDispatch)(Register)
