export const addItemToCart = (cartItems, ItemToAdd) =>{
	const existingCartItem = cartItems.find(item => ItemToAdd.id === item.id);
	if(existingCartItem)
	{
		return cartItems.map(item =>
			item.id === ItemToAdd.id ?
			{...item, quantity : item.quantity + 1}
			: item
			
		)
	}
	return [...cartItems, {...ItemToAdd, quantity : 1}];
}

export const  removeItemFromCart = (cartItems, ItemToRemove) =>{
	const existingCartItem = cartItems.find(item => ItemToRemove.id === item.id);

	if(existingCartItem.quantity === 1)
	{
		return cartItems.filter(item => (item.id !== ItemToRemove.id))
	}

	return cartItems.map(item =>
				item.id === ItemToRemove.id ?
				{...item, quantity : item.quantity-1}
				:
				item
			)
}


