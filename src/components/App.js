import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainWin from './MainWin'
import SliderApp from './Slider'


const App = () =>(
  <div>
    <Switch>
      <Route exact path='/' component={MainWin} />
      <Route path='/Slider' component={SliderApp} />
    </Switch>
  </div>
)

export default App
