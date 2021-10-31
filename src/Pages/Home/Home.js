import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import HomeOffer from './HomeOffer/HomeOffer';
import Nothing from './HomeOffer/Nothing';
import Transport from './HomeOffer/Transport/Transport';

const Home = () => {
    const [offer, setOffer] = useState([]);
    const [transportInfo, setTransportInfo] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/offer')
            .then(res => {
                // console.log(res.data);
                setOffer(res.data);
            });
    }, []);
    useEffect(() => {
    axios.get('http://localhost:4000/transportInfo')
        .then(res => {
            // console.log(res.data);
            setTransportInfo(res.data);
        });
    }, []);
    let count = 0;
    console.log(offer);
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fXb9KYv/cox.jpg" height="550px"
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
                        src="https://i.ibb.co/x581MK8/Jaflong.jpg" height="550px"
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
                        src="https://i.ibb.co/2vF9W1V/sunderbon.jpg" height="550px"
                        alt="Sundarban"
                    />

                    <Carousel.Caption>
                        <h3>Sundarban</h3>
                        <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='container mt-5'>
                <h2>Tour Offers</h2>
                <Row xs={1} md={2} lg={3} className="g-2">
                    {
                        offer.map(offers => {
                            count++;
                            if (count <= 6) {
                                return <HomeOffer key={offers._id} value={offers}></HomeOffer>
                            } else {
                                return <Nothing key={offers._id}></Nothing>
                            }
                        })
                    }
                </Row>
                < div className='container my-5' >
                    <h2>Special Discount In Winter</h2>
                    < div className='row d-flex justify-content-center align-items-center' >
                        <div className='col-md-6 col-sm-12 px-3 my-5'>
                            <h3> <span className='fs-2 text-danger'>Check out any 3 Packages and Get 50% Discount</span> : <span className='fs-6 fst-italic'>Looking for a travel deal? Check out these deals and special offers to make your Bangladeshi holiday effortless and unforgettable. Terms and conditions apply.</span> </h3>
                        </div>
                        <div className='col-md-6 col-sm-12 my-5'>
                            <Carousel fade>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block "
                                        src="https://i.ibb.co/KxPSkpt/nilgiri-banderban.jpg" height="260px" width="550px"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block "
                                        src="https://i.ibb.co/QQnpzhG/sajek-rangamati.jpg" height="260px" width="550px"
                                        alt="nilachol-banderban"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                        className="d-block "
                                        src="https://i.ibb.co/nC2L4Rh/chera-dip.jpg" height="260px" width="550px"
                                        alt="nilachol-banderban"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div >
                </div >
                < div className='container my-5' >
                    <h2>Transport Deals</h2>
                    <Row xs={1} md={2} lg={2} className="g-2">
                        {
                            transportInfo.map(transport => <Transport key={transport._id}
                                transport={transport}></Transport>)

                        }
                    </Row>

                </div >
            </div>
        </div>
    );
};

export default Home;