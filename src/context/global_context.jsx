import React, { createContext, useState } from 'react';
import { services } from '../services/api';


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [global, setGlobal] = useState({
        username: null
    });

    const login = (username) => {
        console.log("==LOGIN==", username);
        //window.localStorage.setItem('username', 'home');
        setGlobal({ username });
    }

    
    const logout = () => {
        console.log("==LOGOUT==");
        //window.localStorage.clear();       
        setGlobal({ username: null });
    }


    const getUsers = async () => {

        let user_response = await services("GET", "https://jsonplaceholder.typicode.com/users");
    
        if(user_response.status === 200){
            return user_response.data
        }
        
        return false;
    }
    
    
    return (
        <GlobalContext.Provider value={{
            global,
            setGlobal,
            login,
            logout,
            getUsers
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
