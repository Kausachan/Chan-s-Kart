import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../shopping-bag.svg';
import './CartIcon.styles.scss';
import {connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) =>{
	return(
		<div className = "cart-icon" onClick = {() => toggleCartHidden()}>
			<ShoppingIcon className = "shopping-icon"/>
			<span className = 'item-count'>{itemCount}</span>
		</div>
		)
}

const dispatchAction = dispatch => ({
	toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
	itemCount : selectCartItemsCount
})

export default connect(mapStateToProps, dispatchAction)(CartIcon);