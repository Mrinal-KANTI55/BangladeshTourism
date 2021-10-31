import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth/UseAuth';

const LogIn = () => {
    const location = useLocation();
    const history = useHistory();
    const PreviousLocation = location.state?.from || '/home';
    const { user, googleSignUp } = useAuth();

    const useGoogleLogInHandel = () => {
        googleSignUp()
            .then(result => {
                history.push(PreviousLocation);
            })
    }

    return (
        <div>
            {
                user.email ?
                    <div>
                        <h4>name : {user.name}</h4>
                        <h4>Email : {user.mail}</h4>
                        <img src={user.pic} alt="" />
                    </div>
                    : <Button className='mt-5' variant="primary" onClick={useGoogleLogInHandel} type="submit">
                        Google Login
                    </Button>
            }

        </div>
    );
};

export default LogIn;