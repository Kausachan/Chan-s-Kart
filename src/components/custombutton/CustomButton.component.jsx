import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({children, IsGoogleSignin, inverted, ...other}) =>{
	return(
		<button className = {`${IsGoogleSignin ? "google-sign-in" : ''} ${inverted ? "inverted" : ''} custom-button`} {...other}>
			{children}
		</button>
		)
	}

export default CustomButton;