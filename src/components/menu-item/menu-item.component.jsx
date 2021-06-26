import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, img, size, history, match, matchUrl}) =>{
	return(
		<div className = {`${size} menu-item`}  onClick = {() => history.push(`${match.url}${matchUrl}`)}>
			{<div className = "bg-image" style = {{backgroundImage : `url(${img})`}}/>}
				<div className = "content1">
					<h1 className = "title">{title}</h1>
					<span className = "subtitle">SHOP NOW</span>
				</div>
		</div>
		)
	
}

export default withRouter(MenuItem);