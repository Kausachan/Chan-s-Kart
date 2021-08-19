import React from 'react';
import {auth, createUserProfileDocument} from '../../firebase/Firebase.utils';
import FormInput from '../forminput/FormInput.component';
import CustomButton from '../custombutton/CustomButton.component';
import './Signup.styles.scss';
import {setLoader} from '../../redux/loader/loader.action'; 
import {connect} from 'react-redux';

class Signup extends React.Component{
	constructor(){
		super();
		this.state = {
			displayName : '',
			password : '',
			confirmPassword : '',
			email : ''
		}
	}

	handleSubmit = async event =>{
		event.preventDefault();
		const {displayName, email, confirmPassword, password} = this.state;
		const {setLoader} = this.props;
		if(password !== confirmPassword)
		{
			alert("password don't match");
			return;
		}
		const func = async ()=> {
			try{
			const {user} = await auth.createUserWithEmailAndPassword(email, password)
			createUserProfileDocument(user, {displayName})
			}
			catch(error){
				console.error(error)
			}
			await setLoader(null);
			this.setState({displayName : '',
				password : '',
				confirmPassword : '',
				email : ''})
		}
		func();
		setLoader(true);
		
	}

	handleChange = event =>{
		const {name, value} = event.target;
		this.setState({
			[name] : value
		})
	}
	render(){
		const {displayName, email, confirmPassword, password} = this.state;
		return(
			<div className = "sign-up">
				<h1 className = "title"> I Don't Have An Account</h1>
				<form onSubmit = {this.handleSubmit}>
					<FormInput
						type = "text"
						label = "Name"
						value = {displayName}
						name = "displayName"
						handleChange = {this.handleChange}
						required
					/>
					<FormInput
						type = "email"
						label = "Email"
						value = {email}
						name = "email"
						handleChange = {this.handleChange}
						required
					/>
					<FormInput
						type = "password"
						label = "Password"
						value = {password}
						name = "password"
						handleChange = {this.handleChange}
						required
					/>
					<FormInput
						type = "password"
						label = "Confirm Password"
						value = {confirmPassword}
						name = "confirmPassword"
						handleChange = {this.handleChange}
						required
					/>
					<CustomButton type = "submit"> SIGN UP </CustomButton>
				</form>
			</div>
			)
	}
}

const dispatchAction = (dispatch) =>({
	setLoader : loader => dispatch(setLoader(loader))
})


export default connect(null, dispatchAction)(Signup);