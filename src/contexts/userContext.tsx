import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({children}: any)=>{
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getUser=(token: string)=>{
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({data})=>{
            setUser(data.user);
            setLogin(true);
        }).catch((error)=>{
            console.log('não autenticado', error)
        })
    }

    useEffect(()=>{
        getUser(token);
    }, [token])

    const handleLogin=(email: string, senha: string)=>{
        api.post('/user/login', {email, senha}).then(({data})=>{
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch((error)=>{
            console.log('não logado', error)
        })
    }

    return(
        <UserContext.Provider value={{login, user, handleLogin}}>
            {children}
        </UserContext.Provider>
    )

}