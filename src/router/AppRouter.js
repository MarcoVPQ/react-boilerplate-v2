import React from 'react';
import { Router, Route, Switch  , Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


import DashBoardPage from '../components/DashboardPage';

import Notfound from '../components/NotFound';
import LoginPage from './../components/LoginPage';
import  PrivateRoute  from './PrivateRoute';
import  PublicRoute  from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashBoardPage} />
                <Route  component={Notfound} />
            </Switch> 
        </div>
    </Router>
)

export default AppRouter
	
