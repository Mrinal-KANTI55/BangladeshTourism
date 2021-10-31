import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddTourOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:4000/offer', data)
            .then(response => {
                console.log(response);
                reset();
            })
    }
    const onClick = data => {
        // console.log(data);
        axios.post('http://localhost:4000/transportInfo', data)
            .then(response => {
                console.log(response);
                reset();
            })
    }
    return (
        <div>
            <h2 className='mt-5'>AddTourOffer</h2>
            <div className='container mt-5 w-75'>
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("TourName")} placeholder='TourName' />
                    </div>
                    <div className='col-lg-6'>
                        <input type="number" class="form-control" {...register("price")} placeholder='price' />
                    </div>
                    <div className='col-lg-12'>
                        <input class="form-control" {...register("TourImage")} placeholder='TourImage' />
                    </div>
                    <div className='col-lg-12'>
                        <input class="form-control" {...register("TourDetails")} placeholder='TourDetails' />
                    </div>
                    <input className='btn btn-primary w-25 text-center' type="submit" />
                </form>

            </div>

            <h2 className='mt-5'>Add TRANSPORT DEALS</h2>
            <div className='container my-5 w-75'>
                <form className="row g-3" onSubmit={handleSubmit(onClick)}>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("TransportName")} placeholder='TransportName' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" type="number"  {...register("price")} placeholder='price' />
                    </div>
                    <div className='col-lg-6'>
                        <input class="form-control" {...register("TransportImage")} placeholder='TransportImage' />
                    </div>
                    <div className='col-lg-10'>
                        <input class="form-control" {...register("TransportDetails")} placeholder='TransportDetails' />
                    </div>
                    <input className='btn btn-primary w-25 text-center' type="submit" />
                </form>

            </div>

        </div>
    );
};

export default AddTourOffer;

