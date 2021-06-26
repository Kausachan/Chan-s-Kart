import SHOP_DATA from './Shopdata';

const INITIAL_STATE = {
	collectionItems : SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) =>{
	switch(action.type){
		default:
			return state
	}
}

export default shopReducer;