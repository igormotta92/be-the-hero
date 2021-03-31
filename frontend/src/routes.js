import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIcident from './pages/NewIcident';

export default function Routes() {

    //console.log(this.props);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>

                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIcident}/>
            </Switch>
        </BrowserRouter>
    );
}