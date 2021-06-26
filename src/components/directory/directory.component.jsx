import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';
import {createStructuredSelector} from 'reselect';
import {directorySelector} from '../../redux/directory/directory.selectors.js';

import {connect} from 'react-redux';
 

const Directory = ({section}) => (
			<div className = "directory-menu">
				{
					section.map(({id, ...Others}) =>
					{
						return <MenuItem key = {id} {...Others}/>
					})
				}
			</div>
			)

const MapStateToProps = createStructuredSelector({
	section : directorySelector
})


export default connect(MapStateToProps)(Directory);