import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing';
import Auth from './Components/Auth';
import Create from './Components/Create/Create'
import CreateDeck from './Components/Create/CreateDeck';
import ChatRoom from './Components/ChatRoom';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Home' component={Landing} />
        <Route path='/create' component={CreateDeck} />
        <Route path='/chat-room' component={ChatRoom} />
    </Switch>
)