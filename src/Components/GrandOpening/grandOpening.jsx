import {useState, useEffect} from "react";
import style from "../../ComponentStyles/GrandOpeningStyle/grandOpeningStyle.module.css";

const GrandOpening = () => {
    const[backgroundColor , setBackgroundColor] = useState(false);

    useEffect(() => {
        let switchBackgroundColor = setTimeout(() => {
             setBackgroundColor(!backgroundColor);
        }, 1200);

        return () => clearInterval(switchBackgroundColor);
    },[backgroundColor]);
    
    return (   
        <section style={{backgroundColor: backgroundColor ? 'var(--bubbleGumPink)' : 'var(--lightPink)'}}>
            <h1 className={style.grandOpeningHeader}>Grand Opening</h1>
        </section>
      );
}
 
export default GrandOpening;