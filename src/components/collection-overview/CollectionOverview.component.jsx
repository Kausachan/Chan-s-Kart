import React from 'react';
import Collectionpreview from '../collection-preview/Collectionpreview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './CollectionOverview.styles.scss';

const CollectionOverview = ({collections}) =>{
	return(
			<div className = "collections-overview">
				{
					collections.map(({id, ...others}) => 
						<Collectionpreview key = {id} {...others}/>
						)
				}
			</div>
		)
}

const MapStateToProps = createStructuredSelector({
	collections : selectCollectionsForPreview
})

export default connect(MapStateToProps)(CollectionOverview);