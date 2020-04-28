import React, { createContext, useReducer } from 'react';

const initialState = {selectedPresentation: null};
const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'SET_PRESENTATION':
                return {
                    ...state,
                    selectedPresentation: action.data.presentation
                }
            default:
                throw new Error();        
        };
    }, initialState);

    return <Provider value = {{state, dispatch}}>{children}</Provider>
}

export { store, StateProvider };