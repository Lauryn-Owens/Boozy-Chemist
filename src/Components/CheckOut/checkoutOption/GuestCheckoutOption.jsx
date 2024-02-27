import style from "../../../ComponentStyles/CheckOutStyle/checkOutOption/guestCheckOutOptionStyle.module.css";
import CheckOut from "../checkOut";

const GuestCheckoutOption = ({setGuestCheckout}) => {
    return (
        <section className={style.guestCheckout}>
                        <h1 className={style.guestCheckoutHeader}>GUEST CHECKOUT</h1>
                        <p className={style.guestCheckoutText}>
                            You can check out without creating an account.
                            <br />
                            You'll have a chance to create an account later.
                        </p>
                        <button className={style.guestCheckoutBtn}
                         onClick={() => {setGuestCheckout(true)}}
                            >
                               CONTINUE AS GUEST
                        </button>
        </section>
    );
}

export default GuestCheckoutOption;
