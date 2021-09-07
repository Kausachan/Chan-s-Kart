import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const inputShop = state => state.shop;

export const shopSelector = createSelector(
	[inputShop],
	item => item.collectionItems
);

export const selectCollectionsForPreview = createSelector(
		[shopSelector],
		collections => collections ? Object.keys(collections).map(key => collections[key]) : []
	)

export const selectCollections = memoize(urlParam => 
		createSelector(
			[shopSelector],
			collection => collection ? collection[urlParam.toLowerCase()] : null
		));

export const selectIsCollectionFetching = createSelector(
	[inputShop],
	shop => shop.isFetching
);

export const selectErrorMessage = createSelector(
	[inputShop],
	shop => shop.errorMessage
)