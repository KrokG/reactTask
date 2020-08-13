import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

let page = 1; 

function Page(props){
	switch(props.page){
		case 0: return creatMain();
		case 1: return creatSlider();
		default: return <h1>400 not found</h1>
	}
}

//

function creatMain(){
	return (
		<div>
			<h1>Welcom to page</h1>
			<button>slider</button>
		</div>
	)
}

//

function creatSlider(){
	return (
		<div>
			<h1>creatSlider</h1>
			<button>main</button>
		</div>
	)
}

//

function app(){
	ReactDOM.render((
		<BrowserRouter>
			<Page page={page}/>
			<Switch>
				<Route exact path="/home" component={home} />
			</Switch>
		</BrowserRouter>
	), document.getElementById('root'))
}

//

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
