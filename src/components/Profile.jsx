import React, { memo } from 'react';

const Profile = (props) => {
    const { profileData } = props;

    return (
        <div className="profile-side">
            <img
                alt=""
                width="230"
                height="230"
                className="profile-img"
                src={profileData.avatar_url}
            />
            <h1>{profileData.name}</h1>
            <h3>{profileData.login}</h3>
            <div className="profile-role">{profileData.bio}</div>
            <hr />
            <div className="profile-corporation">{profileData.company}</div>
            <div className="profile-country">{profileData.location}</div>
            <a href='https://github.com/'>Sign in to view email</a>
        </div>
    );
}

export default memo(Profile);
