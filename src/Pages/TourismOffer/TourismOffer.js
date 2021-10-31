import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Offer from './Offer/Offer';
import { Row } from 'react-bootstrap';

const TourismOffer = () => {
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        axios.get('https://gory-phantom-15581.herokuapp.com/offer')
            .then(res => {
                console.log(res.data);
                setOffer(res.data);
            });
    }, []);
    return (
        <div>
            <h1 className='mt-5'>Tour Offer </h1>
            <div className='container my-5'>

                <Row xs={1} md={2} lg={3} className="g-2">
                    {
                        offer.map(offer => <Offer key={offer._id} offer={offer}></Offer>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default TourismOffer;