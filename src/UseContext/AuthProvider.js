import React, { createContext } from 'react';
import UseFier from '../Hooks/UseFire/UseFire';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = UseFier();
    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider; 