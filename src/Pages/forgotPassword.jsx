import{useState} from "react";
import {Link} from 'react-router-dom';
import style from "../PagesStyle/forgotPasswordStyle.module.css";

const ForgotPassword = () => {
    const[showMessage, setShowMessage] = useState(false);

    return (
          <main className={style.forgotPassword}>
                <h1 className={style.header}>Forgot Password?</h1>
                <p className={style.text}>No worries, we'll send you reset instructions.</p>
                <form>
                    <label htmlFor="email" className={style.emailLabel}>
                       Email 
                    </label>    
                    <input  required className={style.emailInput} type="email" placeholder="Enter your email" />
                    <input 
                    style={{width:'max-content', minHeight:'3rem', padding:'0.5rem 1rem'}}
                     className={style.emailSubmit} type="submit" value="Reset Password" id="resetPassword" name="resetPassword"
                     onClick={() => {
                        setShowMessage(true);
                     }}
                     />
                </form>
                {
                    showMessage ? <p
                    style={{color:'var(--bubbleGumPink)', textAlign:'center'}}
                    >A email was sent!!!</p> : null
                }
                <Link
                to="/login"
                className={style.forgotPasswordLink}
                >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                &nbsp;  &nbsp; 
                Back to log In</Link>
          </main>
      );
}
 
export default ForgotPassword;