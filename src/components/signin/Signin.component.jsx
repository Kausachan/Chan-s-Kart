import React from 'react';
import FormInput from '../forminput/FormInput.component';
import './Signin.styles.scss';
import CustomButton from '../custombutton/CustomButton.component';
import {signInWithGoogle, auth} from '../../firebase/Firebase.utils';

class Signin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email : '',
			password : ''
		}
	}

	handleSubmit = async event =>{
		event.preventDefault();
		const {email, password} = this.state;
		try{
			await auth.signInWithEmailAndPassword(email, password);
		}
		catch(err){
			console.log(err)
		}
		this.setState({email : '', password : ''})
	}

	handleChange = event =>{
		const {value, name} = event.target
		this.setState({[name] : value})
	}

	render(){
		return(
			<div className = "sign-in">
				<h2> I Already Have An Account </h2>
				<span> Signin with your Email and Password</span>
				<form onSubmit = {this.handleSubmit}>
					<FormInput name = "email" label = "Email" type = "email" value = {this.state.email} handleChange = {this.handleChange} required/>
					<FormInput name = "password" label = "Password" type = "password" value = {this.state.password} handleChange = {this.handleChange} required/>
					<div className = "button">
						<CustomButton type = "submit">SIGN IN </CustomButton>
						<CustomButton onClick = {signInWithGoogle} IsGoogleSignin>SIGN IN WITH GOOGLE</CustomButton>
					</div>
				</form>
			</div>
			)
	}
}

export default Signin;