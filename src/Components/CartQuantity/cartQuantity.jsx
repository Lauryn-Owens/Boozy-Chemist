import React, {useContext} from 'react';
import { CartContext } from '../../Context/Cart/CartContext';
import style from '../../ComponentStyles/CartQuantityStyle/cartQuantityStyle.module.css';

const CartQuantity = () => {
    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;

    function totalQuantity(){
        let countQuantity = 0;
        for(let i = 0; i < state.length; i++){
            countQuantity += state[i].quantity;
        }
        return countQuantity;
    }

    let total = totalQuantity();
    console.log(total);
    return(
     <>
          {
            (total > 0) &&(
                <span id={style.cartQuantity}>{total}</span>   
            )      
       }
     </>
    )
};

export default CartQuantity;