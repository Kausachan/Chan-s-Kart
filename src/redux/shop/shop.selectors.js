import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
	hats : 1,
	sneakers : 2,
	partywear : 3,
	sandals : 4,
	formals : 5
}

const inputShop = state => state.shop;

export const shopSelector = createSelector(
	[inputShop],
	item => item.collectionItems
);

export const selectCollectionsForPreview = createSelector(
		[shopSelector],
		collections => Object.keys(collections).map(key => collections[key])
	)

export const selectCollections = memoize(urlParam => 
		createSelector(
			[shopSelector],
			collection => collection[urlParam]
		));
