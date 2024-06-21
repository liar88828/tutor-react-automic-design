import React, {Component} from 'react';
import {connect} from "react-redux";
import {loginUserApi} from "../../../config/redux/action";
import {Button} from "../../../components/atoms/Button";
import {useNavigate} from "react-router-dom";

class Login extends Component {
	state = {
		email: '',
		password: ''
	}


	handleChangeText = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}


	handleLoginSubmit = async () => {
		const {email, password} = this.state;
		const navigate = useNavigate();
		const userCredential = await
			this.props.loginApi(
				{email, password})
		.catch(err => console.log(err)) // dari redux
		if (userCredential) {
			console.log('login success')
			this.setState({
				email: '',
				password: ''
			})
			navigate('/Dashboard');
		} else {
			console.log("failed")
		}
	}

	render() {



		return (<div className='auth-container'>
			<div className='auth-card'>
				<h1 className='aunt-title'>Login Page </h1>
				<input type='text'
				       id='email'
				       placeholder='Email'
				       className='input'
				       onChange={this.handleChangeText}
				       value={this.state.email}

				/>
				<input type='password'
				       id='password'
				       placeholder='Password'
				       className='input'
				       onChange={this.handleChangeText}
				       value={this.state.password}
				/>
				<Button
					onClick={this.handleLoginSubmit}
					title={"Register"}

					loading={this.props.isLoading}
				/>
			</div>
		</div>);
	}
}

const reduxState = (state) => ({ // harus ada ( dan {
	isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
	loginApi: (data) => {
		dispatch(loginUserApi(data))
	}
})
export default connect(reduxState, reduxDispatch)(Login);