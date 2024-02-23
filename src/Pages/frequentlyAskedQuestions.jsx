import React from 'react';
import style from '../PagesStyle/frequentlyAskedQuestions.module.css';
import { Link } from 'react-router-dom';

const FrequencyAskedQuestionsPage = () => {
    return (  
        <div className={style.FrequencyAskedQuestionsContainer}>
            <h1 id={style.FAQTitle}>Frequently Asked Questions</h1>
            <main className={style.accordion}>
                <div>
                    <input type="checkbox" id="questionOne" className={style.accordionInput} name="questionAccordion"/>
                    <label htmlFor="questionOne" className={style.accordionLabel}>How does taking a class work?</label>
                    <div className={style.accordionContent}>
                        <p>
                            After purchasing a class, an email will be sent to the provided email address with all the class details. This includes the date and time of the class, a Zoom link for participation, and a USPS tracking number for the class kit delivery. The class kit contains all necessary ingredients, utensils, and a written recipe instruction card.
                        </p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="questionTwo" className={style.accordionInput} name="questionAccordion"/>
                    <label htmlFor="questionTwo" className={style.accordionLabel}>How long does it take for a class kit to be delivered?</label>
                    <div className={style.accordionContent}>
                        <p>
                            The class kit usually takes 1-3 business days to be delivered to your doorstep.
                        </p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="questionThree" className={style.accordionInput} name="questionAccordion"/>
                    <label htmlFor="questionThree" className={style.accordionLabel}>Can I cancel my class purchase?</label>
                    <div className={style.accordionContent}>
                        <p>
                            A class purchase can be canceled with a 100% refund if the cancellation request is made more than a week prior to the class date. No refund will be issued if the cancellation request is made less than a week from the class date.
                        </p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="questionFour" className={style.accordionInput} name="questionAccordion"/>
                    <label htmlFor="questionFour" className={style.accordionLabel}>Can I buy a class for someone else?</label>
                    <div className={style.accordionContent}>
                        <p>
                            Yes, you can purchase a class for someone else. When buying a class for another individual, ensure to forward the information email to them or provide their email address during the checkout process to enable them to receive the information email directly.
                        </p>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="questionFive" className={style.accordionInput} name="questionAccordion"/>
                    <label htmlFor="questionFive" className={style.accordionLabel}>How old do I have to be to participate?</label>
                    <div className={style.accordionContent}>
                        <p>
                            As an American-based company following American government guidelines, participants must be 21 years old or over to join our classes.
                        </p>
                    </div>
                </div>
            </main>
            <p id={style.questionNotAnswered}>
                Have a question that wasn't answered?
            </p>
            <Link id={style.contactUsLink} to="/contactUs">
                Contact Us
            </Link>
        </div>
    );
}
 
export default FrequencyAskedQuestionsPage;