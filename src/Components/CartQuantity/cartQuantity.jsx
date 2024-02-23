import React, { useContext } from 'react';
import { CartContext } from '../../Context/Cart/CartContext';
import style from '../../ComponentStyles/CartQuantityStyle/cartQuantityStyle.module.css';

const CartQuantity = () => {
    const { state } = useContext(CartContext);

    const totalQuantity = () => {
        return state.reduce((total, item) => total + item.quantity, 0);
    };

    const total = totalQuantity();

    return (
        <>
            {total > 0 && (
                <span id={style.cartQuantity}>{total}</span>
            )}
        </>
    );
};

export default CartQuantity;
