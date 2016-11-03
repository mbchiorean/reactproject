"use strict";
var React = require('react');
var authorAPI = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;


var AuthorPage = React.createClass({
    getInitialState: function(){
        return {
            authors: []
        }
    },

    componentDidMount: function(){
        if(this.isMounted()){
            this.setState({authors: authorAPI.getAllAuthors()});
        }
    },

    render: function(){
        return (
            <div>
                <h1> Authors</h1>
                <Link to="author" className="btn btn-success">Add author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});


module.exports = AuthorPage ;