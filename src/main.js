"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
    render: function(){
        var Child;

        switch(this.props.route){
            case 'about': Child = About; break;
            default: Child = Home; break;
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        )
    }
})




function render(){
    var routes = window.location.hash.substr(1);
    ReactDOM.render(<App route={routes} />, document.getElementById('app'));  
}

window.addEventListener('hashchange', render);
render();