import React, {Component} from 'react';
import './register.scss'
import {Button} from "../../../components/atoms/Button";
import {registerUserApi} from "../../../config/redux/action";
import {connect} from "react-redux";

class Register extends Component {
	state = {
		email: '', password: '',
	}

	handleChangeText = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		})
	}

	handleChangeSubmit = () => {
		const {email, password} = this.state
		this.props.registerApi({email, password})
		this.setState({
			email: '', password: ''
		})
	}

	render() {
		return (<div className='auth-container'>
				<div className='auth-card'>
					<h1 className='aunt-title'>Register Page </h1>
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
						onClick={this.handleChangeSubmit}
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
	registerApi: (data) => {
		dispatch(registerUserApi(data))
	}
})

export default connect(reduxState, reduxDispatch)(Register)
