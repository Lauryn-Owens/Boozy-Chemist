import React from 'react';
import {Link} from 'react-router-dom';
import style from '../PagesStyle/errorPageStyle.module.css';

const ErrorPage = () => {
    return ( 
        <div id={style.ErrorPageBodyContainer}>
            <main id={style.ErrorPageBodyContent}>
               <section className={style.leftImageSection}>
               <img src="https://images.unsplash.com/photo-1514483935006-b311818acf27?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjkyNTg0NDI&ixlib=rb-4.0.3&q=80" alt="Pour a drink into a glass but the liquid is spilling onto the floor"/>
               </section>
               <section className={style.rightDetailsSection}>
                <h1>
                    Something is wrong
                    <br/>
                    The page you are looking for was not found.
                    </h1>
                    <button>
                        <Link className={style.link} to="/">Take me home!</Link>
                    </button>
               </section>
            </main>
        </div>
     );
}
 
export default ErrorPage;