import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './src/Components/Landing';
import Auth from './src/Components/Auth';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Home' component={} />
    </Switch>
)