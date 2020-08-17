import React from 'react'
import {Link} from 'react-router-dom'

const MainWin = ()=>{
  return(
    <div className='app__main-win'>
      <div className='main-win__text'>MainWin</div>
      <Link to='/Slider'><div className='main-win__button'>Slider</div></Link>
    </div>
  );
}

export default MainWin
