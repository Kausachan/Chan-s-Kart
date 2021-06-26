import React from 'react';
import './Signin_Signup.styles.scss';
import Signin from '../../components/signin/Signin.component';
import Signup from '../../components/signup/Signup.component';

const Signin_Signup = () =>{
	return (
		<div className = "sigin-in-and-sign-up">
			<Signin/>
			<Signup/>
		</div>
		)
}

export default Signin_Signup;