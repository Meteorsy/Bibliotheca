'use strict';

import LoginApp from './components/login/LoginApp/LoginApp.react';
import ConsoleApp from './components/console/ConsoleApp/ConsoleApp.react';

import UserAdd from './components/console/UserAdd/UserAdd.react';
import UserList from './components/console/UserList/UserList.react';

let
    Router = window.ReactRouter.Router,
    Route = window.ReactRouter.Route,
    IndexRoute = window.ReactRouter.IndexRoute;

ReactDOM.render(
    (
        <Router>
            <Route path="/">
                <IndexRoute component={LoginApp} />
                <Route path="login" component={LoginApp} />
                <Route path="console" component={ConsoleApp}>
                    <Route path="user/add" component={UserAdd} />
                    <Route path="user/list" component={UserList} />
                </Route>
            </Route>
        </Router>
    ),
    document.getElementById('wrapper')
);