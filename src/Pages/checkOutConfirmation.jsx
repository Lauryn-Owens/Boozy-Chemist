import React  from "react";
import{Link} from 'react-router-dom';
import style from '../PagesStyle/checkOutConfirmationStyle.module.css';

const CheckOutConfirmation = () => {
    function generateRandomNumber(){
        let randomNumber;
        let  startNumber = 1000000000;
        for(let i = 0; i < 100; i++){
            randomNumber = Math.floor(Math.random() * i);
        }
        return startNumber + randomNumber;
    }
    
    return ( 
        <main>
            <h1>Thank You For Your Purchase!</h1>
            <p>Your order number is:  #{generateRandomNumber()}.</p>
             <p> We'll email you an order confirmation with 
            details and tracking information</p>
            <button id={style.continueShoppingButton}>
                <Link id={style.continueShoppingLink} to="/ourClasses">
                    Continue Shopping
                </Link>
            </button>
        </main>
     );
}
 
export default CheckOutConfirmation;