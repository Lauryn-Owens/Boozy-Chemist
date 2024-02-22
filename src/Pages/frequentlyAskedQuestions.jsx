import React from 'react';
import style from '../PagesStyle/frequentlyAskedQuestions.module.css';
import {Link} from 'react-router-dom';

const FrequencyAskedQuestionsPage =  () => {
    return (  
        <div className={style.FrequencyAskedQuestionsContainer}>
        <h1 id={style.FAQTitle}>Frequency Asked Questions</h1>
        <main className={style.accordion}>
            <div>
                <input type="checkbox" id="questionOne" className={style.accordionInput} name="questionAccordion"/>
                <label for="questionOne" className={style.accordionLabel}>How does taking a class work?</label>
                <div className={style.accordionContent}>
                <p>
                    After a class is purchased a email will be sent to the
                    email provided with all of the classes details. The details
                    includes the date and time of the class and  a zoom link so that you can follow along in the class. Also, 
                    a tracking number for USPS is provided, so you are aware of the arrival
                    of your class kit. The class kit contains every thing you need to complete
                    the class such as: liquor, utensils, and a written recipe
                    instruction  card.
                </p>
                </div>
            </div>
            <div>
                <input type="checkbox" id="questionTwo" className={style.accordionInput} name="questionAccordion"/>
                <label for="questionTwo" className={style.accordionLabel}>How long does it take a class kit to be delivered?</label>
                <div className={style.accordionContent}>
                <p>
                    The class kit takes 1-3 business days to be delivered to your door.
                </p>
                </div>
            </div>
            <div>
                <input type="checkbox" id="questionThree" className={style.accordionInput} name="questionAccordion"/>
                <label for="questionThree" className={style.accordionLabel}>Can I cancel my class purchase?</label>
                <div className={style.accordionContent}>
                <p>
                    A class can be canceled with 100% refund if the current date is more
                    than a week prior to the class date. If the current date is less than a week 
                    from class date there will be no refund distributed.
                </p>
                </div>
            </div>
            <div>
                <input type="checkbox" id="questionFour" className={style.accordionInput} name="questionAccordion"/>
                <label for="questionFour" className={style.accordionLabel}>Can I buy a class for others?</label>
                <div className={style.accordionContent}>
                <p>
                    Yes, you can. In fact, some of our customers have actually purchased
                    our classes as presents for others. When you buy a class for another individual make
                    sure that you forward the information email to them or when providing us an email
                    during the checkout process use their email instead, this allows them to get the information
                    email directly.
                </p>
                </div>
            </div>
            <div>
                <input type="checkbox" id="questionFive" className={style.accordionInput} name="questionAccordion"/>
                <label for="questionFive" className={style.accordionLabel}>How old do I have to be to partipate?</label>
                <div className={style.accordionContent}>
                <p>
                    We are an American based company following American government guidelines.
                    Therefore, you must be 21 and over to partipate in our classes.
                </p>
                </div>
            </div>
            </main>
            <p id={style.questionNotAnswered}>
                Have a question that was not answered?
            </p>
            <Link id={style.contactUsLink}
                 to="/contactUs">
                     Contact Us
            </Link>
        </div>
    );
}
 
export default  FrequencyAskedQuestionsPage;