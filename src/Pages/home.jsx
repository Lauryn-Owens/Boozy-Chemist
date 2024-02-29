import React from 'react';
import{Link} from "react-router-dom";
import GrandOpening from '../Components/GrandOpening/grandOpening';
import style from '../PagesStyle/homePageStyle.module.css';

const HomePage = () => {
    return ( 
        <main id={style.homePageBodyContainer}>
            <GrandOpening/>
            <section id={style.homePageContent}>
                <h1>Brilliantly Boozy</h1>
                <p>We're on a mission to take the stress<br/>out of life one boozy class at a time.</p>
                <section id={style.viewClassesButton}>
                    <Link className={style.links} to="/ourClasses">
                        <button>View Classes</button>
                    </Link>
                    <div id={style.shadowsButton}></div>
                </section>
                
            </section> 
        </main> 
    );
}
 
export default HomePage;
