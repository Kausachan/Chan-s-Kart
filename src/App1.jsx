import React from 'react';
import {Route, Link} from 'react-router-dom';

const blog = (props) =>{
	console.log(props)
	return (
		<div>
			<h1> blog </h1>
		</div>
		)
}

const posts = (props) =>{
	console.log(props)
	return (
		<div>
			<Link to = {`${props.match.url}/13`}>post13</Link>
			<Link to = {`${props.match.url}/14`}>post14</Link>
			<Link to = {`${props.match.url}/15`}>post15</Link>
			<h1> posts</h1>
		</div>
		)
}

const postId = (props) =>{
	console.log(props)
	return (
		<h1> postId  {props.match.params.postId}</h1>
		)
}

const App1 = () =>{
	return (
		<div>
			<Route exact path = "/" component = {blog}/>
			<Route exact path = "/asdasd/dasdas/posts" component = {posts}/>
			<Route path = "/asdasd/dasdas/posts/:postId" component = {postId}/>
		</div>
		)
}

export default App1;