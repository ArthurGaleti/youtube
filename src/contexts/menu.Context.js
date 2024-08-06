import { createContext, useState } from "react";

export const MenuCont = createContext();


export const MenuSwap = ({children})=>{
    
    const [menuState , setMenuState] = useState(true)
    
    return(
        <MenuCont.Provider value={{menuState, setMenuState}}>
            {children}
        </MenuCont.Provider>
    )
}