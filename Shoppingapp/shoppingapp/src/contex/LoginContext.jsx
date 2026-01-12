import { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider =({children})=>{
    const [isLogin,setIsLogin] = useState(false);

    const toggleLogin=()=>{
        setIsLogin((prev)=>(!prev));
    }
    return(
        <LoginContext.Provider value={{isLogin,toggleLogin}}>
            {children}
        </LoginContext.Provider>
    )
}
