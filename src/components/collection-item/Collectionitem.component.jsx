import React from 'react';
import './Collectionitem.styles.scss';
import CustomButton from '../custombutton/CustomButton.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const Collectionitem = ({item, addItem}) =>{
	const {name , price, imageUrl} = item;
	return(
		<div className = "collection-item">
			<div className = "image" style = {{
				backgroundImage : `url(${imageUrl})`
			}}/>
			<div className = "collection-footer">
				<span className = "name"> {name} </span>
				<span className = "price"> {price} </span>
			</div>
			<CustomButton inverted onClick = {() => addItem(item)}>Add to cart</CustomButton>
		</div>
		)
}

const dispatchAction = dispatch => ({
	addItem : item => dispatch(addItem(item))
})

export default connect(null, dispatchAction)(Collectionitem); 


