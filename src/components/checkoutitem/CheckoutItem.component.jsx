import React from 'react';
import './CheckoutItem.styles.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';
import StripeButton from '../stripebutton/StripeButton.component';

const CheckoutItem = ({cartItem, addItem, removeItem,clearItemFromCart}) =>{
	const {name, quantity, price, imageUrl} = cartItem;
	return(
		<div className = "checkout-item">
			<div className = "image-container">
				<img src = {imageUrl} alt = "item"/>
			</div>
			<span className = "name">{name}</span>
			<span className = "quantity">
				<div className = "arrow" onClick = {() => removeItem(cartItem)}>&#10094;</div>
				<span className = "value">{quantity}</span>
				<div className = "arrow" onClick = {() => addItem(cartItem)}>&#10095;</div>
			</span>
			<span className = "price">{price}</span>
			<span className = "remove-button" onClick = {() => clearItemFromCart(cartItem)}>&#10005;</span>
		</div>
	)
}

const MapDispatchAction = (dispatch) => ({
	addItem : item => dispatch(addItem(item)),
	removeItem : item => dispatch(removeItem(item)),
	clearItemFromCart : item => dispatch(clearItemFromCart(item))
})

export default connect(null, MapDispatchAction)(CheckoutItem);
