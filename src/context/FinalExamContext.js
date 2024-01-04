import React, {createContext, useContext, useState} from 'react';

const MyExamContext = createContext();

export const MyExamInformationProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState(0);

    // states
    return (
        <MyExamContext.Provider value={{
            products, setProducts, cartItems, setCartItems
        }}>
            {children}
        </MyExamContext.Provider>
    );
};

export const useExamContext = () => {
    const context = useContext(MyExamContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
