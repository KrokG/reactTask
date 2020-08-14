import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const MainWin = () => (
	<div className='app__main-win'>
		<div className='main-win__text'>Welcom to page</div>
		<Link to='/Slider'><div className='main-win__button'>slider</div></Link>
	</div>
)

const Slider = () => (
	<div className='win-slider__slider'>
		<button onClick={slideBack}>back</button>
		<img id='picture' className='slider__picture-box'/>
		<button onClick={slideNext}>next</button>
	</div>
)

const MenuAddFile = () => (
	<div>
		<input type='File' multiple={true} onChange={GetImg}/>
	</div>
)

const SlideMode = () => (
	<div className='win-slider__slide-mode'>
		<Link to='/Slider/server'><div className='slide-mode__button'>server </div></Link>
		<Link to='/Slider/local'><div className='slide-mode__button'>local</div></Link>
		<Switch>
			<Route path='/Slider/local' component={MenuAddFile} />
		</Switch>
	</div>
)

const winSlider = () => (
	<div className='app__win-slider'>
		<Slider/>
		<SlideMode/>
		<Link to='/'><div className='win-slider__button'>back</div></Link>
	</div>
)

class App extends React.Component{
	render(){
		return(
			<div>
				<Switch>
					<Route exact path='/' component={MainWin} />
					<Route path='/Slider' component={winSlider} />
				</Switch>
			</div>
		);
	}
}
  
ReactDOM.render((
		<BrowserRouter>
			<App />
		</BrowserRouter>
	),
	document.getElementById('root')
);


let picture_save =  new Array();
let allImg = 0;
let indPic = 0;

function GetImg(){
	console.log('get img');
	let pictureBox = document.getElementById('picture');

	let files = document.querySelector('input[type=file]').files;
	let reader =  new FileReader();

	let countImg = files.length;
	allImg += countImg;
	indPic += countImg-1;
	let indexImg = countImg - 1;
	if(files.length > 0){
		reader.readAsDataURL(files[indexImg]);
	}
	reader.onloadend = function(event){
		pictureBox.src = reader.result;
		picture_save.push(pictureBox.src);
		indexImg--;
		if(indexImg >= 0 ){
			reader.readAsDataURL(files[indexImg]);
		}
	}
}

function slideBack(){
	let pictureBox = document.getElementById('picture');
	indPic--;
	if(indPic < 0){
		indPic = allImg - 1;
	}
	pictureBox.src = picture_save[indPic]
}

function slideNext(){
	let pictureBox = document.getElementById('picture');
	indPic++;
	if(indPic >= allImg){
		indPic = 0;
	}
	pictureBox.src = picture_save[indPic]
}