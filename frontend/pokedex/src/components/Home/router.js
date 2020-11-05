import React from 'react'
import Home from './home'
import Individual from '../Pokemon/individual'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default function Routes(){


    return (
        <Router>
                <Route exact path='/' component={Home}/>
            <Switch>
                <Route exact path='/pokemon/:id' component={Individual}/>
            </Switch>
        </Router>
    )

}