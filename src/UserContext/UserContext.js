import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [globalData, setGlobalData] = useState({cart:[]});

    // const authInfo = {cart}

    return (
        <AuthContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </AuthContext.Provider>
    );
}

export default UserContext;
