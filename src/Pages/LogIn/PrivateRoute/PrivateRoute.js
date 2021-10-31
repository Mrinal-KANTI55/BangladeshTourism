import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/UseAuth/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user,isLoading } = useAuth();
    if(isLoading){
        return <h3>Loading...</h3>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;