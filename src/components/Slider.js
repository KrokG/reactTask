import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import getFile from './menuAddFile'

import pic1 from '../store/img_source/person1.png'
import pic2 from '../store/img_source/person2.png'
import pic3 from '../store/img_source/person3.png'
import pic4 from '../store/img_source/person4.png'

let pic = [pic1, pic2, pic3, pic4];
let pic_local = [];
let countPic = pic.length;

const slide_pic = (num, mode) => {
  if(mode === 'server'){
    if(num >= pic.length){
      num = 0;
    }
    return <img  className='slider__picture-box' src={pic[num]}></img>
  }
  if(mode === 'local'){
    if(num >= pic_local.length){
      num = 0;
    }
    return <img className='slider__picture-box' src={pic_local[num]}></img>
  }
}

const initialState = {
  index_pic: '0',
  slide: slide_pic(0, 'server'),
  mode: 'server'
};

const ACTION_BUTTON_BACK = 'ACTION_BUTTON_BACK'
const ACTION_BUTTON_NEXT = 'ACTION_BUTTON_NEXT'
const ACTION_MODE_SERVER = 'ACTION_MODE_SERVER'
const ACTION_MODE_LOCAL = 'ACTION_MODE_LOCAL'

const changeModeServer = () => {
  return{
  type: ACTION_MODE_SERVER,
  payload:  'server',
  };
};

const changeModeLocal = () => {
  return{
  type: ACTION_MODE_SERVER,
  payload:  'local',
  };
};

const changePicBack= () => {
  let index = store.getState().index_pic;
  countPic = store.getState().mode == 'local' ? pic_local.length: pic.length;
  index--;
  if(index < 0){
    index = countPic -1;
  }
  return {
    type: ACTION_BUTTON_BACK,
    payload: slide_pic(index, store.getState().mode),
    index: index,
  };
};

const changePicNEXT= () => {
  let index = store.getState().index_pic;
  countPic = store.getState().mode == 'local' ? pic_local.length: pic.length;
  index++;
  if(index >= countPic){
    index = 0;
  }
  return {
    type: ACTION_BUTTON_BACK,
    payload: slide_pic(index, store.getState().mode),
    index: index,
  };
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case ACTION_BUTTON_BACK:
      return { ...state, slide: action.payload, index_pic:action.index};
      case ACTION_BUTTON_NEXT:
        return { ...state, slide: action.payload, index_pic:action.index};
      case ACTION_MODE_SERVER:
        return { ...state, mode: action.payload};
        case ACTION_MODE_LOCAL:
        return { ...state, mode: action.payload};
    default: return(state)
  }
}

const store = createStore(rootReducer);

class Slider extends React.Component{
  render(){
    const dispatch = this.props.dispatch;
    console.log(this.props)
    return(
      <div className='app__win-slider'>
        <div className='win-slider__slider'>
          <button onClick={()=>{dispatch(changePicBack());
          }}>back</button>
          <div className='slider__slide'>
            {this.props.slide}
          </div>
          <button onClick={()=>{dispatch(changePicNEXT());
          }}>next</button>
        </div>

        <Link to='/'><div className='win-slider__button'>back</div></Link>

        <div className='win-slider__slide-mode'>
          <Link to='/Slider' onClick={()=>{dispatch(changeModeServer());
          }}><div className='slide-mode__button'>server</div></Link>
          <Link to='/Slider/local' onClick={()=>{dispatch(changeModeLocal());
          }}><div className='slide-mode__button'>local</div></Link>
        </div>

        <Switch>
          <Route path='/Slider/local' component={MenuAddFile} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    index_pic: state.index_pic,
    slide: state.slide,
    mode: state.mode,
  };
};

const WrappedMainComponent = connect(mapStateToProps)(Slider);

const SliderApp = () => {
  return(
    <Provider store={store}>
      <WrappedMainComponent/>
    </Provider>
  )
}

export default SliderApp;
export {pic_local};

const MenuAddFile = () => (
	<div>
		<input type='File' multiple={true} onChange={getFile}/>
	</div>
)
