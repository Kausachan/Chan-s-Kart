import React from 'react';
import './CartDropDown.styles.scss';
import CustomButton from '../custombutton/CustomButton.component';
import CartItem from '../cartitem/CartItem.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import toggleCartHidden from '../../redux/cart/cart.actions';

const CartDropDown = ({cartItems , history, dispatch, ...otherProps}) =>{
	console.log(otherProps);
	return ( 
			<div className = 'cart-dropdown'>
			{
				cartItems.length ? 
				(
				<div className = 'cart-items'>
				{
					cartItems.map(item => <CartItem key = {item.id} item = {item}/>)
				}
				</div>
				)
				:
				<span className = "empty-message">Your cart is empty</span>
			}
			<CustomButton onClick = {() => {
				history.push("/checkout")
				dispatch(toggleCartHidden())
		}}> GO TO CHECKOUT </CustomButton>
			</div>
		)
}

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));