"use strict";

var React = require('react');

var About = React.createClass({
    render: function(){
        return (
            <div>
                <h1> About </h1>
                <p>
                    This app uses the followings:
                    <ul>
                        <li>React</li>
                        <li>The new React DOM</li>
                        <li>Flux</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;