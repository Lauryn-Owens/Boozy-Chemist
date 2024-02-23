import { useReducer, createContext } from 'react';

export const CartContext = createContext();

export const Context = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                if (state.find(item => item.id === action.payload.id)) {
                    return state;
                } else {
                    return [...state, action.payload];
                }
            case "INCREASE":
                return state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            case "DECREASE":
                return state.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                }).filter((item) => item.quantity > 0);
            case "REMOVE":
                return state.filter((item) => item.id !== action.payload.id);
            case "CLEAR":
                return [];
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};
