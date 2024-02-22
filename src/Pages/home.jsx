import React from 'react';
import style from '../PagesStyle/homePageStyle.module.css';
import{Routes, Route, Link} from 'react-router-dom';
import OurClassesPage from './ourClasses';

const HomePage = () => {
    return ( 
              <div id={style.homePageBodyContainer}>
                  <section id={style.homePageContent}>
                  <h1>Brillantly Boozy</h1>
                  <p>We're on a mission to take the stress
                    <br/>
                  out of life one boozy class at a time.</p>
                  <section id={style.viewClassesButton}>
                      <button>
                        <Link  className={style.links} to="/ourClasses">
                          View Classes
                        </Link>
                      </button>
                      <div id={style.shadowsButton}></div>
                  </section>

                  <Routes>
                  <Route exact path="/ourClasses" element={<OurClassesPage/>}/>
                  </Routes>
                  </section> 
              </div> 
     );
}
 
export default HomePage;