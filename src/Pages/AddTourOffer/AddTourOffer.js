import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddTourOffer = () => {
    const { register, handleSubmit, reset } = useForm ();
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:4000/offer', data)
            .then(response => {
                console.log(response);
                reset();
            })
        }
        const onClick=data=>{
            // console.log(data);
        axios.post('http://localhost:4000/transportInfo', data)
            .then(response => {
                console.log(response);
                reset();
            })
        }
    return (
        <div>
            <h2>AddTourOffer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("TourName")} placeholder='TourName' />
                <input type="number"  {...register("price")} placeholder='price' />
                <input {...register("TourImage")} placeholder='TourImage' />
                <input {...register("TourDetails")} placeholder='TourDetails' />
                <input type="submit" />
            </form>
            <h2>Add TRANSPORT DEALS</h2>
            <form onSubmit={handleSubmit(onClick)}>
                <input {...register("TransportName")} placeholder='TransportName' />
                <input type="number"  {...register("price")} placeholder='price' />
                <input {...register("TransportImage")} placeholder='TransportImage' />
                <input {...register("TransportDetails")} placeholder='TransportDetails' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTourOffer;