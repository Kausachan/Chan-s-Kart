import React from 'react';
import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
import {Route} from 'react-router-dom';
import Collection from '../category/Collection.component';


const Shoppage  = ({match}) => {
	return(
			<div className = "shop-page">
				<Route exact path = {`${match.path}`} component = {CollectionOverview}/>
				<Route path = {`${match.path}/:collectionId`} component = {Collection}/>
			</div>
			)
		}


export default Shoppage;