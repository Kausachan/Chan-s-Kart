import React from 'react';
import './Collectionpreview.styles.scss';
import Collectionitem from'../collection-item/Collectionitem.component';

const Collectionpreview = ({title, items}) =>{
	return(
		<div className = "collection-preview">
			<h1 className = "title">{title.toUpperCase()}</h1>
			<div className = "preview">
				{
					items.filter((item, ind) =>
						{return (ind < 4)}
						).map((item) => (
						<Collectionitem key = {item.id} item = {item}/>
					))
				}
			</div>
		</div>
		)
}

export default Collectionpreview;