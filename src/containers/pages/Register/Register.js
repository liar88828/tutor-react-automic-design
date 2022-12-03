import React, {Component} from 'react';
import './register.scss'
import {apps} from '../../../config/firebase/Firebase'
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

class Register extends Component {


	state = {
		email: '',
		password: ''
	}

	handleChangeText = (e) => {
		// console.log(e.target.id)// log id
		this.setState({
			[e.target.id]: e.target.value,
		})
	}

	handleChangeSubmit = () => {
		// console.log("email : ", this.state.email)
		// console.log('password : ', this.state.password)

		const {email, password} = this.state
		const auth = getAuth(apps);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				console.log('success :', userCredential)


				// ...
			})
			.catch((error) => {
				console.log(error)
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// ..
			});
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
					<button
						className='btn'
						onClick={this.handleChangeSubmit}>Register
					</button>
				</div>
			</div>
		);
	}
}

export default Register
