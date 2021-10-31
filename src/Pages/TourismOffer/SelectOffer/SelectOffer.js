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
        axios.get(`https://gory-phantom-15581.herokuapp.com/offer/${offerid}`)
            .then(res => {
                console.log(res.data);
                setOffer(res.data);
            });
    }, [offerid]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://gory-phantom-15581.herokuapp.com/user', data)
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
            <div className='container mt-5'>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className='col-lg-6'>
                        <input class="form-control" value={user.displayName} {...register("userName")} placeholder='userName' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" value={user.email} {...register("userEmail")} placeholder='userEmail' />
                    </div>
                    <div className='col-lg-12'>
                        <input class="form-control" value={offerid} {...register("location_id")} placeholder='location_id' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("userAddress")} placeholder='Address' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("userPhoneNumber")} placeholder='userPhoneNumber' />
                    </div>
                    <div className='col-lg-6'>
                        <select class="form-control" {...register("OrederState")}>
                            <option value="Processing">Processing</option>
                            <option value="Conform">Conform</option>
                        </select>
                    </div>
                    <input className='btn btn-primary w-25 text-center' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default SelectOffer;