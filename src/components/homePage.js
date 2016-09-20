"use strict";
var React = require('react');
var App = require('./app');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Styling react</h1>
                <p>ijfhijafh</p>
                <App /> 
            </div>
        );
    }
});

module.exports = Home;

