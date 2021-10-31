import React from 'react';

const SingleUser = (props) => {
    const {userEmail}=props.user;
    return (
        <div>
            <h4>{userEmail}</h4>
        </div>
    );
};

export default SingleUser;