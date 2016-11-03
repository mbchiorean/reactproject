"use strict";
var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Page not found</h1>
                <p>Whoops, the resource was not found</p>
                <p><Link to="/" >Back to home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;