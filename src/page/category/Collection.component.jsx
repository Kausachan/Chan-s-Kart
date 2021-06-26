import React from 'react';
import './Collection.styles.scss';
import Collectionitem from '../../components/collection-item/Collectionitem.component';
import { selectCollections} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';


const Collection = ({collections}) =>{
	const {title, items} = collections;
	return(
		<div className = "collection-page">
			<h2 className = "title">{title}</h2>
			<div className = "items">
				{
					items.map(item => 
						<Collectionitem key = {item.id} item = {item}/>
					)
				}
			</div>
		</div>
		)
}

const MapStateToProps = (state, ownProps) =>({
	collections : selectCollections(ownProps.match.params.collectionId)(state)
})

export default connect(MapStateToProps)(Collection);