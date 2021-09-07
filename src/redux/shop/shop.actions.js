import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/Firebase.utils';

export const fetchCollectionStart = () => ({
	type : ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
	type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload : collectionsMap
})

export const fetchCollectionFailure = (errorMessage) => ({
	type : ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload : errorMessage

})

export const fetchCollectionStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionStart());  // synchronous call

		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionSuccess(collectionsMap));
		}).catch(err => dispatch(fetchCollectionFailure(err.message)));
	}
}