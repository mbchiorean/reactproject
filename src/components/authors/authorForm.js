"use strict";

var React = require('react');
var Input = require('../common/TextInput');

var AuthorForm = React.createClass({
    render: function(){
        return(
            <form>
                <h1>Manage Author</h1>
                <Input 
                    name="firstName"
                    label="First Name"
                    placeholder="enter first name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange} />

                <Input 
                    name="lastName"
                    label="Last Name"
                    placeholder="enter last name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange} />
                
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = AuthorForm;