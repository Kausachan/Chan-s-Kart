import React from 'react';
import './App.css';
import Homepage from './page/homepage/homepage.component.jsx';
import {Route, Switch, Redirect} from 'react-router-dom';
import Shoppage from './page/Shoppage/Shoppage.component';
import Header from './components/header/Header.component.jsx';
import Signin_Signup from './page/signin/Signin_Signup.component';
import {auth, createUserProfileDocument} from './firebase/Firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentuser} from './redux/user/user.selectors'; 
import {createStructuredSelector} from 'reselect';
import Checkout from './page/checkout/Checkout.component';
import Loader from 'react-loader';

class App extends React.Component{

  unSubscribeFromAuth = null;


  componentDidMount(){
    const {setUserAction} = this.props;
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>
     {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id : snapShot.id,
                ...snapShot.data()
            })
          })
        }
        else{ setCurrentUser(userAuth); }
    }) 
  }


  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Header/>
        {
          this.props.loader ?
          (
            <Loader loaded={false} lines={13} length={20} width={10} radius={30}
            corners={1} rotate={0} direction={1} color="#000" speed={1}
            trail={60} shadow={false} hwaccel={false} className="spinner"
            zIndex={2e9} top="50%" left="50%" scale={1.00}
            loadedClassName="loadedContent" />
            )
          :
          null
        }
        <Switch>
          <Route exact path = "/" component = {Homepage}/>
          <Route  path = "/shop" component = {Shoppage}/>
          <Route exact path = "/signin" render = {() => this.props.currentUser ? (<Redirect to = "/"/>) : (<Signin_Signup/>) }/>
          <Route exact path = "/checkout" component = {Checkout}/>
        </Switch>
      </div>
    )

  }
 
}

const mapStateToProps = ({user, loader}) => ({
  currentUser : user.currentUser,
  loader : loader.loader
})
  


const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => 
    dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



