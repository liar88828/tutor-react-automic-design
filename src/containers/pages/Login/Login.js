import React, {Component} from 'react';
import {connect} from "react-redux";
import {actionUserName} from "../../../config/redux/action";

class Login extends Component {
	changeUser = () => {
		this.props.changeUserName()
	}


	render() {
		return (
			<div>
				<h1>Login Page {this.props.userName}</h1>
				<button onClick={this.changeUser}> ganti nama</button>
				<button>Go to Dashboard</button>
			</div>
		);
	}
}

const reduxState = (state) => ({
	popupProps: state.popup,
	userName: state.user
})


const reduxDispatch = (dispatch) => ({
	changeUserName: () => dispatch(actionUserName())
})

export default connect(reduxState, reduxDispatch)(Login);