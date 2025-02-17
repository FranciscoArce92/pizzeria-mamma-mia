import { createContext, useContext } from "react";
import { pizzas } from '../js/pizzas.js';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    return (
        <PizzaContext.Provider value={{pizzas}}>
            {children}
        </PizzaContext.Provider>
    );
};

export const usePizza = () => {
    return useContext(PizzaContext);
};

