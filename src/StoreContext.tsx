import React, {createContext} from 'react';
import {StoreType} from "./Redux/Store";


const StoreContext = createContext({} as StoreType)


export type ProviderType = {
    store: any
    children: React.ReactNode
}

export const Provider = (props:ProviderType)=> {
    return <StoreContext.Provider value={props.store}>
        {props.children}
        </StoreContext.Provider>
}

export default StoreContext;