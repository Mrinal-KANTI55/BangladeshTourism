import React from 'react';
import { Button, Table } from 'react-bootstrap';

const UserBuyOffer = (props) => {
    const { _id, userName, userEmail, location_id, userAddress, userPhoneNumber, OrederState } = props.offer;
    const handelDelete = id => {
        const conform = window.confirm('Are you sure to delete this Oreder?');
        if (conform) {
            const url = `http://localhost:4000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted ');
                    }

                })

        }
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Perches Id</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Status</th>
                        <th>Decision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userName}</td>
                        <td>{userEmail}</td>
                        <td>{location_id}</td>
                        <td>{userAddress}</td>
                        <td>{userPhoneNumber}</td>
                        <td>{OrederState}</td>
                        <td> <Button onClick={() => {
                            handelDelete(_id)
                        }}>X</Button> </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default UserBuyOffer;