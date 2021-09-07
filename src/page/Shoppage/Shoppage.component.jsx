import React from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
import {Route} from 'react-router-dom';
import Collection from '../category/Collection.component';
import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectErrorMessage} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import WithSpinner from '../../components/with-spinner/WithSpinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);


class Shoppage extends React.Component{

	componentDidMount(){
		this.props.fetchCollectionStartAsync();
	}
	render(){
		
		const  {match, isFetching, errorMessage} = this.props;
		return(
			<div className = "shop-page">
				<Route exact path = {`${match.path}`} render = {props => <CollectionOverviewWithSpinner isLoading = {isFetching} errorMessage = {errorMessage} {...props}/> }/>
				<Route exact path = {`${match.path}/:collectionId`} render = {props => <CollectionWithSpinner isLoading = {isFetching} errorMessage = {errorMessage} {...props}/> }/>
			</div>
			)
	}
	
}

const MapStateToProps = createStructuredSelector({
	isFetching : selectIsCollectionFetching,
	errorMessage : selectErrorMessage
})

const MapDispatchAction = (dispatch) => ({
	fetchCollectionStartAsync : () => dispatch(fetchCollectionStartAsync())
})


export default connect(MapStateToProps, MapDispatchAction)(Shoppage);