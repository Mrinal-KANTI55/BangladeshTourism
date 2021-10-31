import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeOffer = (props) => {
    const { _id,TourName, TourImage, TourDetails, price } = props.value;
    const aboutTour=TourDetails.substring(0,280);
    return (
        <div>
            <Col >
                <Card className="my-3">
                    <Card.Img className="p-2" variant="top" src={TourImage} width="350px" height="250px" />
                    <Card.Body>
                        <Card.Title className='text-success'>{TourName}</Card.Title>
                        <Card.Text>
                            About : {aboutTour} .
                        </Card.Text>
                        <Link to={`/selectoffer/${_id}`}><Button variant="warning">Tour cost {price} taka</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HomeOffer;