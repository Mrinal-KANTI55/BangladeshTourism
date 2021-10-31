import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser/SingleUser';

const AllUser = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('https://gory-phantom-15581.herokuapp.com/user')
            .then(res => {
                console.log(res.data);
                setUser(res.data);
            });
    }, []);
    return (
        <div>
            <h2 className='mt-5'>All User Information </h2>
            {
                user.map(userInfo => <SingleUser key={userInfo._id} user={userInfo}></SingleUser>)
            }

        </div>
    );
};

export default AllUser;