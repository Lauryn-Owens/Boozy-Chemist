import { useReducer, createContext } from 'react';

export const CartContext = createContext();
//defining CartContext inside of Context
//Context contains the CartContext
//action is an object
export const Context = (props) => {
    const reducer = (state, action) => 
    {
        switch (action.type){
            case 'ADD':
                const addTempState = state.filter((item) =>{
                    return item.id === action.payload.id
                })
                if(addTempState.length > 0){
                    return state;
                }
                else{
                    return[
                        ...state, action.payload
                    ]
                }
                case "INCREASE":
                    const increaseTempState = state.map((item) => {
                        if(item.id === action.payload.id){
                            return{...item, quantity:item.quantity++};
                        }else{
                            return item;
                        }
                    });
                    return increaseTempState;

                    case "DECREASE":
                        const decreaseTempState = state.map((item) => {
                            if(item.id === action.payload.id){
                                return{...item, quantity:item.quantity--};
                            }else{
                                return item;
                            }
                        });
                        return decreaseTempState; 
                    case "REMOVE":
                        const removeTempState = state.filter((item) => {
                                return item.id !== action.payload.id;
                        }) 
                        return removeTempState;     
                    case "CLEAR":
                        return state = []; 
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer,[]);
    const info={state, dispatch};
    return(
    <CartContext.Provider
       value={info}
        >
        {props.children}
    </CartContext.Provider>
    );
}