import React from 'react';
import {ReactComponent as Logo} from './crown.svg';
import {auth} from '../../firebase/Firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../carticon/CartIcon.component';
import CartDropDown from '../cartdropdown/CartDropDown.component';
import {selectCurrentuser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer,
 LogoContainer, 
 OptionContainer, 
 OptionLink} from './Header.styles';

const Header = ({currentUser, hidden}) =>(
	<HeaderContainer >
		<LogoContainer to = "/">
			<Logo className = "logo"/>
		</LogoContainer>
		<OptionContainer>
			<OptionLink to = "/shop"> SHOP </OptionLink>
			<OptionLink to = "/contact"> CONTACT </OptionLink>
			{
				(currentUser) 
				? 
				(<OptionLink as = 'div' onClick = {() => auth.signOut()}> 
					SIGN OUT
				</OptionLink >)
				:
				(<OptionLink  to = "/signin"> SIGN IN </OptionLink> )
			}
			<CartIcon/>
			{
				hidden ? null : (<CartDropDown/>)
			}
		</OptionContainer>
	</HeaderContainer>
	);
const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentuser, 
	hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);

