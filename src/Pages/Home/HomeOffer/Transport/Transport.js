import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Transport = (props) => {
    const {TransportName,TransportImage,TransportDetails,price}=props.transport;
    const aboutTour=TransportDetails.substring(0,280);
    return (
        <div>
            <Col >
                <Card className="my-3">
                    <Card.Img className="p-2" variant="top" src={TransportImage} width="350px" height="300px" />
                    <Card.Body>
                        <Card.Title className='text-success'>{TransportName}</Card.Title>
                        <Card.Text>
                            {aboutTour} .
                        </Card.Text>
                        <Button variant="warning">Tour cost {price} taka</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Transport;