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
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/pokemon/:id' component={Individual}/>
            </Switch>
        </Router>
    )

}