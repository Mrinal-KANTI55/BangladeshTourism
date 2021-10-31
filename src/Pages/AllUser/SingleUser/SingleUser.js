// import React from 'react';

// const SingleUser = (props) => {
//     const {userEmail}=props.user;
//     return (
//         <div>
//             <h4>{userEmail}</h4>
//         </div>
//     );
// };

// export default SingleUser;
import React from 'react';
import { Button, Table } from 'react-bootstrap';

const SingleUser = (props) => {
    const { _id, userName, userEmail, userAddress, userPhoneNumber } = props.user;
    const handelDelete = id => {
        const conform = window.confirm('Are you sure delete this account');
        if (conform) {
            const url = `https://gory-phantom-15581.herokuapp.com/user/${id}`;
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
        <div className='container mt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Decision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userName}</td>
                        <td>{userEmail}</td>
                        <td>{userAddress}</td>
                        <td>{userPhoneNumber}</td>
                        <td> <Button onClick={() => {
                            handelDelete(_id)
                        }}>X</Button> </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default SingleUser;