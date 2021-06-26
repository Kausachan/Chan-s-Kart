import React from 'react';
import './Checkout.styles.scss';
import '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectTotal} from '../../redux/cart/cart.selectors';
import {selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkoutitem/CheckoutItem.component';
import StripeButton from '../../components/stripebutton/StripeButton.component';

const Checkout = ({total, cartItems}) =>{
	return(
		<div className = "checkout-page">
			<div className = "checkout-header">
				<div className = "header-block">
					<span>Product</span>
				</div>
				<div className = "header-block">
					<span>Description</span>
				</div>
				<div className = "header-block">
					<span>Quantity</span>
				</div>
				<div className = "header-block">
					<span>Price</span>
				</div>
				<div className = "header-block">
					<span>Remove</span>
				</div>
			</div>
			{
				cartItems.map(item => {
					return <CheckoutItem key = {item.id} cartItem = {item}/>
				})
			}
			<span className = "total">TOTAL ${total}</span>
			<div className = "test-warning">
				*Please use the following test credit card details*
				<br/>
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</div>
			<StripeButton price = {total}/>
		</div>
		)
}

const MapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	total : selectTotal
})

export default connect(MapStateToProps)(Checkout);