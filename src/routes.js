import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Work from './Components/Work';
import Home from './Components/Home';
import Connect from './Components/Connect';
import Resume from './Components/Resume';


export default (
    <Switch>
        <Route path='/work' component={Work}/>
        <Route path='/home' component={Home}/>
        <Route path='/connect' component={Connect}/>
        <Route path='/resume' component={Resume}/>
    </Switch>
)