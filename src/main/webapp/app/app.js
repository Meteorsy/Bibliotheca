'use strict';

import LoginApp from './components/login/LoginApp/LoginApp.react';
import ConsoleApp from './components/console/ConsoleApp/ConsoleApp.react';

import QueryRequest from './components/console/QueryRequest/QueryRequest.react';
import QueryList from './components/console/QueryList/QueryList.react';
import QueryCheck from './components/console/QueryCheck/QueryCheck.react';

import DatabaseCN from './components/console/DatabaseCN/DatabaseCN.react';
import DatabaseEN from './components/console/DatabaseEN/DatabaseEN.react';
import DatabaseBeStow from './components/console/DatabaseBeStow/DatabaseBeStow.react';
import DatabaseSelf from './components/console/DatabaseSelf/DatabaseSelf.react';
import DatabaseMIT from './components/console/DatabaseMIT/DatabaseMIT.react';

import SpreadList from './components/console/SpreadList/SpreadList.react';
import SpreadConfig from './components/console/SpreadConfig/SpreadConfig.react';

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
                    <Route path="query">
                        <IndexRoute component={QueryList} />
                        <Route path="request" component={QueryRequest} />
                        <Route path="list" component={QueryList} />
                        <Route path="check" component={QueryCheck} />
                    </Route>
                    <Route path="db">
                        <IndexRoute component={DatabaseCN} />
                        <Route path="cn" component={DatabaseCN} />
                        <Route path="en" component={DatabaseEN} />
                        <Route path="bestow" component={DatabaseBeStow} />
                        <Route path="self" component={DatabaseSelf} />
                        <Route path="mit" component={DatabaseMIT} />
                    </Route>
                    <Route path="spread">
                        <IndexRoute component={SpreadList} />
                        <Route path="list" component={SpreadList} />
                        <Route path="config" component={SpreadConfig} />
                    </Route>
                    <Route path="user">
                        <IndexRoute component={UserList} />
                        <Route path="add" component={UserAdd} />
                        <Route path="list" component={UserList} />
                    </Route>
                </Route>
            </Route>
        </Router>
    ),
    document.getElementById('wrapper')
);