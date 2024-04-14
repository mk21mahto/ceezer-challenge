'use client'
import { AppContextType } from "@/utils/types";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<AppContextType>({
    cartItem: [],
    setCartItem: () => {}
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [cartItem, setCartItem] = useState<any[]>([]);

    return (
        <AppContext.Provider value={{ cartItem, setCartItem }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
