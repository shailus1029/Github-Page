import React, { Component } from 'react';

export class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="profile-side">
                <img alt="" width="230" height="230" className="profile-img" src={this.props.profileData ? this.props.profileData.avatar_url : ''} />
                <h1>{this.props.profileData ? this.props.profileData.name : ''}</h1>
                <h3>{this.props.profileData ? this.props.profileData.login : ''}</h3>
                <div className="profile-role">{this.props.profileData ? this.props.profileData.bio : ''}</div>
                <hr />
                <div className="profile-corporation">{this.props.profileData ? this.props.profileData.company : ''}</div>
                <div className="profile-country">{this.props.profileData ? this.props.profileData.location : ''}</div>
                <a href='https://github.com/'>Sign in to view email</a>
            </div>
        );
    }
}

export default Profile
