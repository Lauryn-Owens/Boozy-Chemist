import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "../../ComponentStyles/AgeVerifierStyle/ageVerifierModalStyle.module.css";

const AgeVerifierModal = ({ modalOpen, setPageClickable }) => {
  const [birthYear, setBirthYear] = useState('');
  const [ageVerified, setAgeVerified] = useState(null);
  const[age, setAge] = useState(null);

  const handleInputChange = (event) => {
    setBirthYear(event.target.value);
  };
  
  const verifyAge = (e) => {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const enteredYear = parseInt(birthYear);
    const age = currentYear - enteredYear;
    
    if (age >= 21) {
      setAgeVerified(true);
         //if of age-21 or over they can freely browse the site
      setPageClickable(true);
    }
    else{
      //get difference in years
      setAge(age);
    }
    return;
  };

  if (!modalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <section className={style.modalContainer}>
      {!ageVerified && (
        <div>
          <h1>Verify Age for A Boozy Experience</h1>
          <label htmlFor="birthYear">Enter your birth date &nbsp;:</label> &nbsp;
          <input
            type="date"
            id="birthYear"
            max="2025-01-01"
            value={birthYear}
            onChange={handleInputChange}
          />
          <button className={style.verifyAge} onClick={(e) => verifyAge(e)}>Verify Age</button>
          {
            age === null && (
          <p className={style.ageText}>
            You must be 21 or older to proceed.
          </p> 
        )}
        {
          age !== null && age < 21 && (
          <p className={style.ageText}>
            You are only {age} years old. Come back in {21 - age} years.
          </p>
        )}
        </div>
      )}
    </section>,
    document.getElementById("ageVerifierModal")
  );
};

export default AgeVerifierModal;
