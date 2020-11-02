import React from 'react'
import Home from './home'
import Individual from '../Pokemon/individual'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default function Routes(){


    return (
        <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/pokemon' component={Individual}/>
        </Router>
    )

}