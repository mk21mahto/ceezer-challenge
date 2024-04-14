'use client'
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>({
    data : []
})

export function AppWrapper({ children } : {
    children: React.ReactNode
}) {
    let [cartItem, setCartItem] = useState([])

    return (
        <AppContext.Provider value={{cartItem, setCartItem}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}