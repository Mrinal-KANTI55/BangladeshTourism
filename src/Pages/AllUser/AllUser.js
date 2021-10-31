import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser/SingleUser';

const AllUser = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/user')
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            });
    }, []);
    return (
        <div>
            <h2>All User {user.length} </h2>
            {
                user.map(userInfo => <SingleUser key={userInfo._id} user={userInfo}></SingleUser>)
            }

        </div>
    );
};

export default AllUser;