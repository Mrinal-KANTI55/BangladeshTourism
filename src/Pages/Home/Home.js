import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import HomeOffer from './HomeOffer/HomeOffer';
import Nothing from './HomeOffer/Nothing';

const Home = () => {
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/offer')
            .then(res => {
                // console.log(res.data);
                setOffer(res.data);
            });
    }, []);
    let count=0;
    console.log(offer);
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fXb9KYv/cox.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cox's Bazar</h3>
                        <p>Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/x581MK8/Jaflong.jpg"
                        alt="Jaflong"
                    />

                    <Carousel.Caption>
                        <h3>Jaflong</h3>
                        <p>Jaflong is a tourist spot in Sylhet division.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/2vF9W1V/sunderbon.jpg"
                        alt="Sundarban"
                    />

                    <Carousel.Caption>
                        <h3>Sundarban</h3>
                        <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='container'>
            <Row xs={1} md={2} lg={3} className="g-2">
            {
                offer.map(offers=>{
                    count++;
                    if (count<=6){
                        return <HomeOffer key={offers._id} value={offers}></HomeOffer>
                    }else{
                        return <Nothing key={offers._id}></Nothing>
                    }
                })
            }
            </Row>
            </div>
        </div>
    );
};

export default Home;