import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing';
import Auth from './Components/Auth';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Home' component={Landing} />
    </Switch>
)