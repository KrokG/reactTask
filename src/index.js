import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

let page = 1; 

function Page(props){
	switch(props.page){
		case 0: return creatMain();
		case 1: return creatSlider();
		default: return <h1>400 not found</h1>
	}
}

function creatMain(){
	return (
		<div>
			<h1>Welcom to page</h1>
			<button>slider</button>
		</div>
	)
}

const Type1 = () => (
	<h1>Type1</h1>
)

const Type2 = () => (
	<h2>Type2</h2>
)

const Type3 = () => (
	<h3>Type 3</h3>
)

const Type4 = () => (
	<h5>Type4</h5>
)

function creatSlider(){
	return (
		<div>
			<Switch>
				<Route path='/Type1' component={Type1}/>
				<Route path='/Type2' component={Type2}/>
				<Route path='/Type3' component={Type3}/>
				<Route path='/Type4' component={Type4}/>
			</Switch>
			<button>back</button>
			<ul>
				<li><Link to='/Type1'>Type1</Link></li>
				<li><Link to='/Type2'>Tipe 2</Link></li>
				<li><Link to='/Type3'>type3</Link></li>
				<li><Link to='/Type4'>type 4</Link></li>
			</ul>
		</div>
	)
}

function app(){
	ReactDOM.render((
		<BrowserRouter>
			<Page page={page}/>
		</BrowserRouter>
	), document.getElementById('root'))
}

app();

let btn = document.getElementsByTagName('button')[0];
console.log(btn);
btn.onclick = function(event){
	console.log('click');
	if(page === 1){
		page = 0;
		app();
	} else if(page === 0){
		page = 1;
		app();
	}
}



