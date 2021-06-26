import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) =>
{
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51J6VTCSEEuwY4NFqbHiej7sKcy8eux1EDJiwXnETRTN7XbBLfT942qShg6O8USv12AbTJPKjZ5g5zNVEPlsXT3yX0092IsKw3a';

	const onToken = (token) =>{
		console.log(token);
		alert('Payment successful');
	}

	return(
			<StripeCheckout
				label = "Pay Now"
				name = "Chan's Kart"
				billingAddress
				shippingAddress
				image = "https://svgshare.com/i/CUz.svg"
				description = {`Your total is $${price}`}
				amount = {priceForStripe}
				panelLabel = "Pay Now"
				token = {onToken}
				stripeKey = {publishableKey}
			/>	

		)
}

export default StripeButton;