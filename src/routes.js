"use strict";
var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var DefaultRoute = ReactRouter.IndexRoute;
var routeHistory = ReactRouter.hashHistory;

var Routes = (
        <Router history={routeHistory}>
            <Route name="app" path="/" component={require('./components/app')}>
                <DefaultRoute component={require('./components/homePage')} />
                <Route key="authors" name="authors" path="authors" component={require('./components/authors/authorPage')} />
                <Route key="about" name="about" path="about" component={require('./components/about/aboutPage')} />
            </Route>
        </Router>
);

module.exports = Routes;