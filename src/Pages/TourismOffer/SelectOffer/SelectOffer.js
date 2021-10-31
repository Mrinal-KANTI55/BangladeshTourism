import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const SelectOffer = () => {
    const { user } = useAuth();
    const { offerid } = useParams();
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/offer/${offerid}`)
            .then(res => {
                console.log(res.data);
                setOffer(res.data);
            });
    }, [offerid]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:4000/user', data)
            .then(response => {
                console.log(response);
                reset();
            });
    }
    const { TourName, TourImage, TourDetails, price } = offer;
    return (
        <div className='container my-5'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 col-sm-12 my-5'>
                    <img className='rounded w-100' src={TourImage} alt="" /></div>
                <div className='col-md-6 col-sm-12 px-3 my-5'>
                    <h3> <span className='fs-2 text-danger text-decoration-underline'>{TourName}</span> : <span className='fs-6 fst-italic'>{TourDetails}</span> </h3>
                    <h6> <span className='text-danger'>Around cost</span> : $ {price}</h6>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={user.displayName} {...register("userName")} placeholder='userName' />
                <input value={user.email} {...register("userEmail")} placeholder='userEmail' />
                <input value={offerid} {...register("location_id")} placeholder='location_id' />
                <input {...register("userAddress")} placeholder='Address' />
                <input {...register("userPhoneNumber")} placeholder='userPhoneNumber' />
                <select {...register("OrederState")}>
                    <option value="Processing">Processing</option>
                    <option value="Conform">Conform</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default SelectOffer;