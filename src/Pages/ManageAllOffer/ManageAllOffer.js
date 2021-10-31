import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import UserBuyOffer from './UserBuyOffer/UserBuyOffer';
const ManageAllOffer = () => {
    const { user } = useAuth();
    const [offer, setOffer] = useState([]);
    console.log(user.email);
        axios.get(`http://localhost:4000/user/${user.email}`)
            .then(res => {
                console.log(res.data);
                setOffer(res.data);
            });
    return (
        <div>
            <h1 className='mt-5'> Buy Offer Details </h1>
            <div className='container my-5'>                 
                    {
                        offer.map(offer => <UserBuyOffer key={offer._id} offer={offer}></UserBuyOffer>)
                    }
            </div>
        </div>
    );
};

export default ManageAllOffer;