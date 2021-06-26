import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './crown.svg';
import './Header.styles.scss';
import {auth} from '../../firebase/Firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../carticon/CartIcon.component';
import CartDropDown from '../cartdropdown/CartDropDown.component';
import {selectCurrentuser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const Header = ({currentUser, hidden}) =>(
	<div className = "header">
		<Link to = "/" className = "logo-container">
			<Logo/>
		</Link>
		<div className = "options">
			<Link className = "option" to = "/shop"> SHOP </Link>
			<Link className = "option" to = "/contact"> CONTACT </Link>
			{
				(currentUser) 
				? 
				(<div className = "option" onClick = {() => auth.signOut()}> 
					SIGN OUT
				</div>)
				:
				(<Link className = "option" to = "/signin"> SIGN IN </Link> )
			}
			<CartIcon/>
			{
				hidden ? null : (<CartDropDown/>)
			}
		</div>
	</div>
	);
const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentuser, 
	hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);

