import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './WithSpinner.styles';


// This is a HOC where it returns the Spinner function 

const WithSpinner = WrapperComponent => {
	const Spinner = ({isLoading, errorMessage, ...otherProps}) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer/>
		</SpinnerOverlay>
		) :  (
			!errorMessage ?
			<WrapperComponent {...otherProps}/>
			:
			<SpinnerOverlay>
				<h1>Oops Error Occured ...</h1>
			</SpinnerOverlay>
		)
	}
	return Spinner;
}

export default WithSpinner;
